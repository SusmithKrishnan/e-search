const client = require('../configs/elastic')

module.exports = async (query) => {
	const { body } = await client.search({
		index: 'files',
		body: {
			query: {
				match: { content: query }
			}
		},
	})
	return body.hits?.hits.map(a => {
		return { url: a._source.url, filename: a._source.fileName }
	});
}

