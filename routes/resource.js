var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var tacobell_controller = require('../controllers/tacobell');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// tacobell ROUTES ///
// POST request for creating a tacobell.
router.post('/tacobell', tacobell_controller.tacobell_create_post);
// DELETE request to delete tacobell.
router.delete('/tacobell/:id', tacobell_controller.tacobell_delete);
// PUT request to update tacobell.
router.put('/tacobell/:id', tacobell_controller.tacobell_update_put);
// GET request for one tacobell.
router.get('/tacobell/:id', tacobell_controller.tacobell_detail);
// GET request for list of all tacobell items.
router.get('/tacobell', tacobell_controller.tacobell_list);
module.exports = router;