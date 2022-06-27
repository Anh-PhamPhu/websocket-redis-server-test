const RedisConnect = require('./config/redisConnect');
const dataFromWebsocket = require('./config/dataFromWebsocket');

const pushDataToRedis = () => {
    const redisPublisher = RedisConnect('localhost', 6379);
    redisPublisher.on('connect', () => {
        console.log('Connected to Redis Server!!!!')
    });
    const data = dataFromWebsocket();
    setInterval(() => {
        const key = Date.now();
        const newData = {
            key : data
        }
        redisPublisher.publish('dataFromWebsocket', JSON.stringify(newData));
    }, 2000);
}

module.exports = pushDataToRedis;
