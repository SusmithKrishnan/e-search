var textract = require('textract');

module.exports = (url) => {
	return new Promise((resolve, reject) => {
		textract.fromUrl(url, (error, text) => {
			if (error) reject(error)
			resolve(text)
		})
	})
}

