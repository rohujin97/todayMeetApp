// const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const result = require('./middleware/result');
const routes = require('./router/common');
const http = require('http');
const app = express();
const server = http.createServer(app)
const config = require('./config/index')
const cors = require('cors')

if (config.middleware.cors) app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// init our socket
const io = socketio(server).sockets;

//REST API
app.use('/', routes); 

require("./middleware/socket")(io)

app.use(result[config.middleware.result].notFound) // notFoundError
app.use(result[config.middleware.result].other) //error handler

server.listen(process.env.PORT || config.port, async () => {
    const startMsg = `${ process.env.PORT || config.port } port is open!!`
    console.info(startMsg)
})
module.exports = app;
