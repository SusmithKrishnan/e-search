var express = require('express');
var router = express.Router();
var search = require('../elasticFunctions/search');
const checkUpdates = require('../workers/checkUpdates');

router.get('/search', (req, res, next) => {
	var searchQuery = req.query.q
	search({ match: { content: searchQuery } })
		.then((result) => {
			res.json(result)
		})
		.catch(e => {
			console.log(e.statusCode)
			res.status(404).json([])
		})
});

router.get('/webhook', (req, res, next) => {
	checkUpdates()
	res.send('ok')

});

module.exports = router;
