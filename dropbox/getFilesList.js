const dropbox = require('../configs/dropbox')
var cursor = ""

module.exports = () => {
	return new Promise((resolve, reject) => {
		dropbox({
			resource: 'files/list_folder',
			parameters: {
				path: '',
				recursive: true,
			}
		}, (err, result) => {
			if (err) reject(err)
			cursor = result.cursor
			resolve(result)
		});
	})
}
