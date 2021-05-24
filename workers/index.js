const getFilesList = require('../dropbox/getFilesList');
const processFiles = require('./processFiles');

module.exports = async () => {
	console.log("Initial run")
	var files = await getFilesList()
	processFiles(files)
}


