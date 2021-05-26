const addFiles = require('../elasticFunctions/addFiles');
const search = require('../elasticFunctions/search');
const parseFile = require('../docParser/parseFile');
const getFileUrl = require('../dropbox/getFileUrl');
const refreshIndex = require('../elasticFunctions/refreshIndex');
const logger = require('../logger');

module.exports = async (files) => {
	files.entries.forEach(async (file) => {
		if (!file.is_downloadable) return

		var inDb = await search({ match: { hash: file.content_hash } })
			.catch(e => logger.error(`Error searching in database ${file.id}`))

		if (inDb?.length) return

		logger.info(`Processing file ${file.id} : ${file.name}`)

		var url = await getFileUrl(file.path_lower)
			.catch(e => logger.error(`Error fetching file url ${file.id}`))

		var textContent = await parseFile(url)
			.catch(e => logger.error(`Error parsing text from ${file.id}`))

		await addFiles({
			url: "https://dropbox.com/home" + file.path_lower,
			fid: file.id,
			hash: file.content_hash,
			content: textContent,
			filename: file.name
		})
			.catch(e => logger.error(`Error adding file to elastic ${file.id}`))
	});
	await refreshIndex()
		.catch(e => logger.error(`Error refreshing index`))
}


