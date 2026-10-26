const mongoose = require('mongoose');
const debug = require('debug')("devalopment:mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/aurora")
    .then(()=>{
        debug("connected");})
    .catch((err)=>{
        debug(err)
    })

module.exports = mongoose.connection;

