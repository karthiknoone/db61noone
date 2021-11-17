var express = require('express');
const tacobell_controlers = require('../controllers/tacobell');
var router = express.Router();

// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('tacobell', { title: 'Search Results for tacobell' });
// });

/* GET tacobell */
router.get('/', tacobell_controlers.tacobell_view_all_Page);
/* GET details with id of tacobell page */
router.get('/tacobell/:id', tacobell_controlers.tacobell_detail);
/* GET detail tacobell page */
router.get('/detail', tacobell_controlers.tacobell_view_one_Page);
/* DELETE details with id of tacobell page */
router.get('/tacobell/:id', tacobell_controlers.tacobell_delete);


module.exports = router;