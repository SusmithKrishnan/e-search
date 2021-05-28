const dropboxV2Api = require('dropbox-v2-api');
const logger = require('../logger');

logger.info("Establishing connection to dropbox API")

var client = dropboxV2Api.authenticate({ token: process.env.DROPBOX_TOKEN });

client({ resource: 'users/get_current_account' }, (err) => {
	if (err) {
		logger.error("Unable to connect to dropbox")
		throw err;
	}
});

module.exports = client
