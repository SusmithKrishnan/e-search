const { redisGet, redisSet } = require('../clients/redis')
const getUpdates = require('../dropbox/getUpdates')
const processFiles = require('./processFiles')


module.exports = async () => {
	var cursor = await redisGet("cursor")
	var files = await getUpdates(cursor)
	await redisSet('cursor', files.cursor)
	processFiles(files)
}