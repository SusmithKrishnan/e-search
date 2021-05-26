const dropboxV2Api = require('dropbox-v2-api');
const logger = require('../logger');

logger.info("Establishing connection to dropbox API")
module.exports = dropboxV2Api.authenticate({ token: process.env.DROPBOX_TOKEN });
