const pool = require('../middleware/pool');
const messageHandler = require("../handlers/message.handler");

let currentUserId = 2;
const users = {};

function createUserAvatarUrl() {
    const rand1 = Math.round(Math.random() * 200 + 100);
    const rand2 = Math.round(Math.random() * 200 + 100);
    return `https://placeimg.com/${rand1}/${rand2}/any`;
}
module.exports = (io) => {

    io.on('connection', socket =>  {
        console.log('today connected')
        console.log(socket.id);
        users[socket.id] = { userId: currentUserId++ };
        socket.on("join", username => { //chatRoomScreen에서 join 하려고 했을때 (이제 사용 안함) test용
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
                    break;
                case "server/join": //로그인할때
                    async function join() {
                        try {
                            console.log("Got join event", action.data);
                            const query = `SELECT * FROM user WHERE user_email = "${action.data}"`
                            const result = await pool.queryParam(query);
                            console.log(result);
                            users[socket.id].usereamil = action.data;
                            users[socket.id].avatar = createUserAvatarUrl();
                            const values = Object.values(users);
                            const onlyWithUsernames = values.filter(u => u.useremail === undefined);
                            socket.emit("action", {
                                type: "users_online",
                                data: onlyWithUsernames
                            });
                            // break
                        } catch (e) {
                            throw e;
                        }
                    }
                    join();
            }
        })
    })
}