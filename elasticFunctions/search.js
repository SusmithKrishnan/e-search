const client = require('../clients/elastic')

module.exports = async (query) => {
	const { body } = await client.search(
		{
			index: 'files',
			body: { query },
		},
		{ ignore: [404] }
	)
	return body.hits?.hits.map(a => {
		return { url: a._source.url, filename: a._source.filename }
	});
}

