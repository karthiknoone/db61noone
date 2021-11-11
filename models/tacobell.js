const mongoose = require("mongoose")
const tacobellSchema = mongoose.Schema({
    tacobell_type: String,
    price: Number,
    quantity: Number
})
module.exports = mongoose.model("tacobell", tacobellSchema)