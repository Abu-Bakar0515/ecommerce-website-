const mongoose = require('mongoose');

const usermodel = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    cart : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "cart"
    }
})

module.exports = mongoose.Model("user" , usermodel);