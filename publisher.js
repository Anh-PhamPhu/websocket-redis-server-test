const RedisConnect = require('./config/redisConnect');

const pushDataToRedis = () => {
    const redisPublisher = RedisConnect('localhost', 6379);
    redisPublisher.on('connect', () => {
        console.log('Connected to Redis Server!!!!')
    });

    setInterval(() => {
        const key = Date.now();
        const data = {
            [key] : Math.random()
        }
        redisPublisher.publish('dataFromWebsocket', JSON.stringify(data));
    }, 2000);
}

module.exports = pushDataToRedis;
