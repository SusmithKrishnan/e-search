const client = require('../configs/elastic')

module.exports = async () => {
	await client.indices.refresh({ index: 'files' })
}