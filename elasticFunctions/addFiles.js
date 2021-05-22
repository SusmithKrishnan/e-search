const client = require('../configs/elastic')

module.exports = async (data) => {
	await client.index({
		index: 'files',
		body: data,
		// url: "https://kskjfbkjsd",
		// fileName:"Addr",
		// content: "lorem ipsum go fast "		
	})
	await client.indices.refresh({ index: 'files' })

}
