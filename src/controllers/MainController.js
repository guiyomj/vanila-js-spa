const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/test', (req, res, next) => {
  res.json({ title: 'Express' })
})

module.exports = router