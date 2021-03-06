const dropbox = require('../clients/dropbox')

module.exports = () => {
	return new Promise((resolve, reject) => {
		dropbox({
			resource: 'files/list_folder',
			parameters: {
				path: '',
				recursive: true,
				include_non_downloadable_files: false
			}
		}, (err, result) => {
			if (err) reject(err)
			resolve(result)
		});
	})
}
