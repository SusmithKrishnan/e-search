const client = require('../clients/elastic')

module.exports = async (data) => {
	await client.index({
		index: 'files',
		body: data
	})
}
