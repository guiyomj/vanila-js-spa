const express = require('express')
const path = require('path')
const cors = require('cors')
const logger = require('morgan')

const mainRouter = require('./src/routers/mainRouter')
const app = express()
require('dotenv').config()

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const compiler = webpack(webpackConfig)

const session = require('express-session')
const fileStore = require('session-file-store')(session)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({
    httpOnly: true,
    secure: false,
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        Secure: false
    },
    store: new fileStore()
}))
app.use(cors({
    origin : '*',
    methods: ['GET', 'POST'],
    credentials : true
}))

app.use(webpackDevMiddleware(compiler))
app.use(webpackHotMiddleware(compiler))

app.use(express.static(path.join(__dirname, 'public')))
app.use('/images', express.static(path.join(__dirname, 'src/frontend/images')))

app.use('/', mainRouter)
app.listen(process.env.PORT)

module.exports = app
