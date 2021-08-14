// const createError = require('http-errors');
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const moment = require('moment')
const result = require('./middleware/result')
const routes = require('./router/common')
const http = require('http')
const app = express()
const server = http.createServer(app)
const config = require('./config/index')
const cors = require('cors')

if (config.middleware.cors) app.use(cors())
logger.token('date', () => moment().format("YYYY-MM-DD HH:mm:ss"))
app.use(logger(config.middleware.morgan))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

//REST API
app.use('/', routes)

app.use(result) //error handler
server.listen(process.env.PORT || config.port, async () => {
    const startMsg = `${ process.env.PORT || config.port } port is open!!`
    console.info(startMsg)
})
module.exports = app;
