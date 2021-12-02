const mongoose = require("mongoose")
const tacobellSchema = mongoose.Schema({
    itemname: String,
    price: Number,
    quantity: Number
})
module.exports = mongoose.model("tacobell", tacobellSchema)