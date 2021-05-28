const { Client } = require('@elastic/elasticsearch');
const logger = require('../logger');

logger.info("Establishing connection to elastic db")
const client = new Client({ node: process.env.ELASTIC_NODE })
client.ping().catch(e=>{
	logger.error("Failed connecting to elastic db")
	throw e
})
module.exports = client;