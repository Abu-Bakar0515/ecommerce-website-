const express = require('express');
const { url } = require('inspector');
const app = express()
const path = require('path')

app.set("view engine" , "ejs");
app.use(express.json());
app.use(express.static(path.join(__dirname , "public")));
app.use(express.urlencoded({
    extended : true
}));

app.get("/" , (req , res)=>{
    res.render('index')
});

app.listen(3000 , (req , res)=>{
    console.log("App is runniing")
})