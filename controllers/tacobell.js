var tacobell = require('../models/tacobell');
// List of all tacobell
exports.tacobell_list = async function(req, res) {
    try{
        thetacobell = await tacobell.find();
        res.send(thetacobell);
    }
    catch(err){
        res.status(500)
        res.send(`{"error": ${err}}`); 
    }
//res.send('NOT IMPLEMENTED: tacobell list');
};

// for a specific tacobell.
exports.tacobell_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await tacobell.findById(req.params.id)
        res.send(result)
    } 
    catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
//res.send('NOT IMPLEMENTED: tacobell list');
};

// Handle tacobell create on POST.
exports.tacobell_create_post = async function (req, res) {
    console.log(req.body)
    let document = new tacobell();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require ttacobell it be a json object
    // {"tacobell_name":"beret tacobell", "colour":"white", "price":"Thirty-four USD"}
    document.tacobell_type = req.body.tacobell_type;
    document.price = req.body.price;
    document.quantity = req.body.quantity;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
//res.send('NOT IMPLEMENTED: tacobell list');
};
// Handle tacobell delete form on DELETE.
exports.tacobell_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await tacobell.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
//res.send('NOT IMPLEMENTED: tacobell list');
};
//Handle bakery update form on PUT.
exports.tacobell_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await tacobell.findById(req.params.id);
        // Do updates of properties
        if (req.body.tacobell_name)
            toUpdate.tacobell_name = req.body.tacobell_name;
        if (req.body.colour)
            toUpdate.colour = req.body.colour;
        if (req.body.price)
            toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result);
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
//res.send('NOT IMPLEMENTED: tacobell list');
};

// VIEWS
// Handle a show all view
exports.tacobell_view_all_Page = async function (req, res) {
    try {
        thetacobell = await tacobell.find();
        res.render('tacobell', { title: 'tacobell Search Results', results: thetacobell });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
//res.send('NOT IMPLEMENTED: tacobell list');
};

// Handle a show one view with id specified by query
exports.tacobell_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await tacobell.findById( req.query.id)
        res.render('tacobelldetail', { title: 'tacobell Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
//res.send('NOT IMPLEMENTED: tacobell list');
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.tacobell_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('tacobellcreate', { title: 'tacobell Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{"error": Error creating ${err}}`); 
    }
//res.send('NOT IMPLEMENTED: tacobell list');
};

// Handle building the view for updating a fish.
// query provides the id
exports.tacobell_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await tacobell.findById(req.query.id)
        res.render('tacobellupdate', { title: 'tacobell Update', toShow: result });
    }
    catch(err){
        res.status(500)
        
    }
//res.send('NOT IMPLEMENTED: tacobell list');
};

// Handle a delete one view with id from query
exports.tacobell_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await tacobell.findById(req.query.id)
        res.render('tacobelldelete', { title: 'tacobell Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
//res.send('NOT IMPLEMENTED: tacobell list');
};


// VIEWS
// Handle a show all view
exports.tacobell_view_all_Page = async function (req, res) {
    try {
        thetacobell = await tacobell.find();
        res.render('tacobell', { title: 'tacobell Search Results', results: thetacobell });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};