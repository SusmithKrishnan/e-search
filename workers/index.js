const getFilesList = require('../dropbox/getFilesList');
const processFiles = require('./processFiles');
const { redisSet } = require('../clients/redis');
const logger = require('../logger');

module.exports = async () => {
	logger.info("Initial run, connecting to dropbox")
	logger.info("Fetching file list")
	var files = await getFilesList()
		.catch(e => logger.error("Error fetching file list"))

	logger.info("Adding cursor to redis")
	await redisSet("cursor", files.cursor)
		.catch(e => logger.error("Error adding cursor to redis"))

	processFiles(files)
}


