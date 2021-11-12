var express = require('express');
const tacobell_controlers = require('../controllers/tacobell');
var router = express.Router();

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('tacobell', { title: 'Search Results for tacobell' });
// });

/* GET tacobell */
router.get('/', tacobell_controlers.tacobell_view_all_Page);
module.exports = router;