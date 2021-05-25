const dropbox = require('../clients/dropbox')

module.exports = (path) => {
	return new Promise((resolve, reject) => {
		dropbox({
			resource: 'files/get_temporary_link',
			parameters: { path }
		}, (err, result) => {
			if (err) reject(err)
			resolve(result.link)
		})
	})
}