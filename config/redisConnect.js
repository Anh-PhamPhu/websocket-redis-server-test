const Redis = require('ioredis');


const redisConnect = (redis_url, redis_port) => {
    const redisClient = new Redis({
        host: redis_url,
        port: redis_port,
        connetTimeout: 1000,
    });
    return redisClient;
}

module.exports = redisConnect;
