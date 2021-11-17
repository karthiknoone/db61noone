var express = require('express');
const tacobell_controlers = require('../controllers/tacobell');
var router = express.Router();

///* GET home page. */
//router.get('/', function (req, res, next) {
//  res.render('tacobell', { title: 'Search Results for tacobells' });
//});

/* GET tacobells */
router.get('/', tacobell_controlers.tacobell_view_all_Page);
/* GET detail tacobell page */
router.get('/detail', tacobell_controlers.tacobell_view_one_Page);
/* GET create tacobell page */
router.get('/create', tacobell_controlers.tacobell_create_Page);
/* GET create update page */
router.get('/update', tacobell_controlers.tacobell_update_Page);
/* GET create delete page */
router.get('/delete', tacobell_controlers.tacobell_delete_Page);
/* GET details with id of tacobell page */
router.get('/tacobell/:id', tacobell_controlers.tacobell_detail);
/* DELETE details with id of tacobell page */
router.get('/tacobell/:id', tacobell_controlers.tacobell_delete);

module.exports = router;