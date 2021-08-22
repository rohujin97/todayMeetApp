let currentMessageId = 1;

function createMessage(user, messageText){
    return {
    _id: currentMessageId++,
    text: messageText,
    createdAt: new Date(),
    user: {
      _id: user.userId,
<<<<<<< HEAD
      name: user.userName,
      avatar: user.userAvatar,
=======
      name: user.username,
      avatar: user.avatar,
>>>>>>> 5387c5b8 (adding redux)
    }
  };
}

function handleMessage(socket, users) {
    socket.on('message', messageText =>  {
        const user = users[socket.id];
        const message = createMessage(user, messageText);
<<<<<<< HEAD
        console.log(socket.id, user)
=======
>>>>>>> 5387c5b8 (adding redux)
        console.log(message);
        socket.broadcast.emit("message", message);
    });
}

module.exports = { handleMessage };