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
const CustomError = require('./util/customError')

if (config.middleware.cors) app.use(cors())
logger.token('date', () => moment().format("YYYY-MM-DD HH:mm:ss"))
app.use(logger(config.middleware.morgan))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

//REST API
app.use('/', routes)

// app.use((req, res, next) => {
//     const error = new CustomError(404, 'notFound')
//     next(error)
// })
// app.use((error, req, res, next) => {
//     res.status(error.status || 500)
//     res.json({
//         error: {
//             message: error.message
//         }
//     })
// })
app.use(result[config.middleware.result].notFound) // notFoundError
app.use(result[config.middleware.result].other) //error handler
server.listen(process.env.PORT || config.port, async () => {
    const startMsg = `${ process.env.PORT || config.port } port is open!!`
    console.info(startMsg)
})
module.exports = app;
