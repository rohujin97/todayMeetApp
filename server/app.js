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

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes); 

server.listen(process.env.PORT || config.port, async () => {
    const startMsg = `${ process.env.PORT || config.port } port is open!!`
    console.info(startMsg)
})
// app.use(result) // 에러가 여기로 들어오게 된다
module.exports = app;
