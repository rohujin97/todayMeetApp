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

const favicon = require('serve-favicon')
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico'))) //favicon 설정

if (config.middleware.cors) app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//REST API
app.use('/', routes); 

const io = socketio(server)
const messageHandler = require("./handlers/message.handler");

let currentUserId = 2;
const users = {};

function createUserAvatarUrl() {
    const rand1 = Math.round(Math.random() * 200 + 100);
    const rand2 = Math.round(Math.random() * 200 + 100);
    return `https://placeimg.com/${rand1}/${rand2}/any`;
}

io.on('connection', socket =>  {
    console.log('today connected')
    console.log(socket.id);
    users[socket.id] = { userId: currentUserId++ };
    socket.on("join", username => {
        // DB에서 useremail과 동일한 data를 찾고 username, url을 가져와서 객체에 저장
        users[socket.id].username = username;
        users[socket.id].avatar = createUserAvatarUrl();
        messageHandler.handleMessage(socket, users);
    })
    socket.on("action", action => {
        switch(action.type){
            case "server/hello":
                console.log("Got hello event", action.data);
                socket.emit("action", {type: "message", data: "Good day!"});
        }
    })
})

// Load configuration files
dotenv.config({ path : './env' })

app.use(result[config.middleware.result].notFound) // notFoundError
app.use(result[config.middleware.result].other) //error handler

server.listen(process.env.PORT || config.port, async () => {
    const startMsg = `${ process.env.PORT || config.port } port is open!!`
    console.info(startMsg)
})
module.exports = app;