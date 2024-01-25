const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema({
    name : "String",
    email : "String",
    password : "String"
},{
    keyVersion : false,
})

const AuthModel = mongoose.model("Movieusers",AuthSchema);

module.exports = {AuthModel}