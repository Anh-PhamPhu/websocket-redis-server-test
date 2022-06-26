const server = require('http').createServer();
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
    }
});
const redisConnect = require('./config/redisConnect');
const pushDataToRedis = require('./publisher');

pushDataToRedis();
const redisSubscriber = redisConnect('localhost', 6379);




io.on('connection', (socket) => {
    console.log("Someone connected");
    redisSubscriber.subscribe('dataFromWebsocket');
    redisSubscriber.on('message', (channel, data) => {
        socket.emit('custom-data', {data});
    })
});

server.listen(5000, () =>{
    console.log("Server sarted on port 5000");
})