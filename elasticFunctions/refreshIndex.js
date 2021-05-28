const client = require('../clients/elastic')

module.exports = async () => {
	await client.indices.refresh(
		{ index: 'files' },
		{ ignore: [404] }
	)
}