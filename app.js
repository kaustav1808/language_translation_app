const dotenv  = require("dotenv").config(); 
const express = require("express");
const path    = require("path")
const cons = require('consolidate');


const app     = express(); 
const port    = process.env.PORT || 3000;


// //Sets our app to use the handlebars engine
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'html');

// //Sets handlebars configurations (we will go through them later on)
 app.engine('html',cons.swig);

app.use('/public',express.static('public'))

app.get("/",function(req,res){
     res.render("index")
});

app.listen(port,function(){
    console.log(`Language Translation app running on port ${port}`);
})