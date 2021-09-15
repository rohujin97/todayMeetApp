let currentMessageId = 1;

function createMessage(user, messageText){
    return {
    _id: currentMessageId++,
    text: messageText,
    createdAt: new Date(),
    user: {
      _id: user.userId,
<<<<<<< HEAD
<<<<<<< HEAD
      name: user.userName,
      avatar: user.userAvatar,
=======
      name: user.username,
      email: user.email,
      avatar: user.avatar,
>>>>>>> 5387c5b8 (adding redux)
=======
      name: user.userName,
      avatar: user.userAvatar,
>>>>>>> 3366c2e7 (little change)
    }
  };
}

function handleMessage(socket, users) {
    socket.on('message', messageText =>  {
        const user = users[socket.id];
        const message = createMessage(user, messageText);
<<<<<<< HEAD
<<<<<<< HEAD
        console.log(socket.id, user)
=======
>>>>>>> 5387c5b8 (adding redux)
=======
        console.log(socket.id, user)
>>>>>>> 3366c2e7 (little change)
        console.log(message);
        socket.broadcast.emit("message", message);
    });
}

module.exports = { handleMessage };