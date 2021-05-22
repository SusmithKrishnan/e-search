var express = require('express');
var router = express.Router();
var search = require('../elasticFunctions/search')

/* GET users listing. */
router.get('/search', (req, res, next) => {
	var searchQuery = req.query.q
	search(searchQuery)
		.then((result) => {
			res.json(result)
		})
		.catch(e => {
			console.log(e.statusCode)
			res.status(404).json([])
		})
});

module.exports = router;
