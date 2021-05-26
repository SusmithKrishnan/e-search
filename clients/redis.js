const redis = require("redis");
const redis_url = process.env.REDIS_URL
const logger = require('../logger');

logger.info("Establishing connection to redis")
const client = redis.createClient(redis_url);

client.on("error", (error) => {
	logger.error("failed connection to redis", error)
});

var redisGet = (key) => {
	return new Promise((resolve, reject) => {
		client.get(key, (err, res) => {
			if (err) reject(err)
			resolve(res)
		})
	})
}

var redisSet = (key, value) => {
	return new Promise((resolve, reject) => {
		client.set(key, value, (err, res) => {
			if (err) reject(err)
			resolve(res)
		})
	})
}

module.exports = { redisGet, redisSet }