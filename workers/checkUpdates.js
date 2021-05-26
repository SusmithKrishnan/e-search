const { redisGet, redisSet } = require('../clients/redis')
const getUpdates = require('../dropbox/getUpdates')
const getFilesList = require('../dropbox/getUpdates')
const processFiles = require('./processFiles')
const logger = require('../logger');

module.exports = async () => {
	logger.info("Fetching updates")

	var cursor = await redisGet("cursor")
		.catch(e => logger.error("Failed to get cursor from redis"))

	var files = await getUpdates(cursor)
		.catch(async (e) => {
			logger.error("Failed to fetch updates retrying full fetch")
			await getFilesList()
				.catch(e => logger.error("Failed to fetch files list"))
		})

	await redisSet('cursor', files.cursor)
		.catch(e => logger.error(e))

	processFiles(files)
}