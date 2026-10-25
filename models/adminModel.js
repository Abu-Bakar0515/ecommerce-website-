const mongoose = require('mongoose');

const adminmodel = mongoose.Schema({
    name : String,
    email : String,
    password : String,
})

module.exports = mongoose.Model("admin" , adminmodel);