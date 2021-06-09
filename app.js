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
  res.sendFile(path.join(__dirname+'/index.html'));
})

app.post("/result/:examine/:result",function(req,res){
 
 var examine = req.params.examine;
 var result  = req.params.result;

  console.log(examine,result)
res.json({ username: 'Flavio' });

// node mailer

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASSWORD
      }
    });
    // mdforhadhossain297@gmail.com
    var mailOptions = {
      from: process.env.GMAIL_ADDRESS,
      to: "islam876ripon@gmail.com",
      subject: "A new examine taken this test",
      text: `${examine} has taken the test and got a result of ${result} out of 15`
    };

    transporter.sendMail(mailOptions, function(error, info){
      var title = ""
      if (error) {
        console.log(error);
        res.render("404",{title: title,currenUser: req.user});
      } else {
        console.log('Email sent: ' + info.response);
        res.send("email successfully sent..");
      }
    });


})


app.listen(port,function(){
	console.log("Server started at port ..." + port);
});





