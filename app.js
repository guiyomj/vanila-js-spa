const express = require('express')
const path = require('path')

const controller = require('./src/controllers/MainController')

const app = express()

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const compiler = webpack(webpackConfig)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(webpackDevMiddleware(compiler))
app.use(webpackHotMiddleware(compiler))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', controller)
app.listen(80)

module.exports = app
