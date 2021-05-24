const addFiles = require('../elasticFunctions/addFiles');
const search = require('../elasticFunctions/search');
const parseFile = require('../docParser/parseFile');
const getFileUrl = require('../dropbox/getFileUrl');
const refreshIndex = require('../elasticFunctions/refreshIndex');

module.exports = async (files) => {
	files.entries.forEach(async (file) => {
		if (!file.is_downloadable) return

		var inDb = await search({ match: { hash: file.content_hash } })
			.catch(() => console.log("Error searching in database", file.id))

		if (inDb?.length) return

		var url = await getFileUrl(file.path_lower)
			.catch(() => console.log("Error Fetching File", file.id))

		var textContent = await parseFile(url)
			.catch(() => console.log("Error parsing file type", file.id))

		await addFiles({
			url: "https://dropbox.com/home" + file.path_lower,
			fid: file.id,
			hash: file.content_hash,
			content: textContent,
			filename: file.name
		})
			.catch(() => console.log("Error adding file to elastic", file.id))
	});
	await refreshIndex()
		.catch(() => { console.log("Error refreshing index") })
}


