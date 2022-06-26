const server = require('http').createServer();
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
    }
});

io.on('connection', (socket) => {
    console.log("Someone connected" + socket.id);
});

server.listen(5000, () =>{
    console.log("Server sarted on port 5000");
})