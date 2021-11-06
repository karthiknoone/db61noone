var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tacobell', { title: 'Search Results for tacobell' });
});

module.exports = router;