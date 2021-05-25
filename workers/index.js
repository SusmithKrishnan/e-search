const getFilesList = require('../dropbox/getFilesList');
const processFiles = require('./processFiles');
const { redisSet } = require('../clients/redis')

module.exports = async () => {
	console.log("Initial run")
	var files = await getFilesList()
	await redisSet("cursor", files.cursor)
	processFiles(files)
}


