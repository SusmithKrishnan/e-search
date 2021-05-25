const dropbox = require('../clients/dropbox')

module.exports = (cursor) => {
	return new Promise((resolve, reject) => {
		dropbox({
			resource: 'files/list_folder/continue',
			parameters: {
				cursor
			}
		}, (err, result) => {
			if (err) reject(err)
			resolve(result)
		});
	})
}