const redis = require("redis");
const redis_url = process.env.REDIS_URL

const client = redis.createClient(redis_url);

client.on("error", (error) => {
	console.error(error);
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