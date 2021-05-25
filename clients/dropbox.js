const dropboxV2Api = require('dropbox-v2-api');
module.exports = dropboxV2Api.authenticate({ token: process.env.DROPBOX_TOKEN });
