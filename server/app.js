// const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http');
const cors = require('cors')
const dotenv = require('dotenv')
const socketio = require('socket.io')

const app = express();

const server = http.createServer(app)

const result = require('./middleware/result');
const routes = require('./router/common');
const config = require('./config/index')
const pool = require('./middleware/pool')

<<<<<<< HEAD
const favicon = require('serve-favicon')
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico'))) //favicon 설정
=======
>>>>>>> 87cf17d1 (revise App.js package.json package-lock.json)

if (config.middleware.cors) app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//REST API
app.use('/', routes); 

const io = socketio(server)
<<<<<<< HEAD

app.use((req, res, next) => {
    res.io = io;
    next();
=======
<<<<<<< HEAD
=======
// console.log('socket io 요청 받아들일 준비가 됨')
>>>>>>> 87cf17d1 (revise App.js package.json package-lock.json)
// require('./middleware/socket')(io)
// const io = socketio(server, { path: '/io' })
// io.adapter(redisAdapter({ host: 'localhost', port: 6379 }))
// require('./middleware/socket')(io)

io.on('connection', function (socket) {
    console.log('today connected')
    socket.emit('news', { hello: 'world' })

    socket.on('my other event', function (data) {
        console.log(data)
    })
>>>>>>> e726473d (revise App.js package.json package-lock.json)
})

const room = io.of('/room');
require('./middleware/socket')(io);

// Load configuration files
dotenv.config({ path : './env' })

app.use(result[config.middleware.result].notFound) // notFoundError
app.use(result[config.middleware.result].other) //error handler

server.listen(process.env.PORT || config.port, async () => {
    const startMsg = `${ process.env.PORT || config.port } port is open!!`
    console.info(startMsg)
})
module.exports = app;