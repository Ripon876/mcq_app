var dotenv         = require('dotenv').config();
var express        = require("express");
var bodyParser     = require("body-parser");
var nodemailer     = require("nodemailer");
var fs             = require('fs');
var path           = require('path');
var app            = express();
var port           = process.env.PORT || 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",function(req,res){
  // res.send("DFssfdgdgsdf gsdfg fd ");
  // res.json({ username: 'Flavio' })
  res.sendFile(path.join(__dirname+'/index.html'));
})

app.post("/result",function(req,res){
  console.log('')
  // res.send("you got 13 out of 15")
})


app.listen(port,function(){
	console.log("Server started at port ..." + port);
});





