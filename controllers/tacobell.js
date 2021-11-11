var tacobell = require('../models/tacobell');
// List of all tacobells
exports.tacobell_list = function(req, res) {
res.send('NOT IMPLEMENTED: tacobell list');
};
// for a specific tacobell.
exports.tacobell_detail = function(req, res) {
res.send('NOT IMPLEMENTED: tacobell detail: ' + req.params.id);
};
// Handle tacobell create on POST.
exports.tacobell_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: tacobell create POST');
};
// Handle tacobell delete form on DELETE.
exports.tacobell_delete = function(req, res) {
res.send('NOT IMPLEMENTED: tacobell delete DELETE ' + req.params.id);
};
// Handle tacobell update form on PUT.
exports.tacobell_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: tacobell update PUT' + req.params.id);
};