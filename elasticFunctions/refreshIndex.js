const client = require('../configs/elastic')

module.exports = async (data) => {
	await client.indices.refresh({ index: 'files' })
}