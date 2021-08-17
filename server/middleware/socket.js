module.exports = (io) => {
    io.on('connections', function(socket) {
        console.log("socket connected");
    })
}