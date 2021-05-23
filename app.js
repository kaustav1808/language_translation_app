const dotenv  = require("dotenv").config() 
const express = require("express")
const app     = express() 
const port    = process.env.PORT || 3000

app.get("/",function(req,res){
     res.send("hello world")
});

app.listen(port,function(){
    console.log(`Language Translation app running on port ${port}`);
})