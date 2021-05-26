const { Client } = require('@elastic/elasticsearch');
const logger = require('../logger');

logger.info("Establishing connection to elastic db")
const client = new Client({ node: process.env.ELASTIC_NODE })
module.exports = client;