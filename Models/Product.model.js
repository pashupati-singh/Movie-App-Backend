const mongoose = require("mongoose");


const ProSchema = mongoose.Schema({
    title: "String",
    rating: "String",
    description: "String",
    image: "String",
    type: "String",
})

const ProductModel = mongoose.model("Movie",ProSchema);


module.exports = {ProductModel};