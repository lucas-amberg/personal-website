const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const path = require('path')

app.use(cors())
app.use(express.static('./dist'))

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, './dist/index.html'));
});

module.exports = app