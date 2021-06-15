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
 
 var examine = req.params.examine.replace(/_/g, ' ');
 var result  = req.params.result;
 let mailList = "";

  // console.log(examine,result) //for debug


if (process.env.TWO_RECEIVER === "yes") {
   mailList = process.env.RECEIVER_EMAIL_1 + "," + process.env.RECEIVER_EMAIL_2;
   console.log(mailList);
}else {
     mailList = process.env.RECEIVER_EMAIL_1;
        console.log(mailList);
}

// node mailer

    // var transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.GMAIL_ADDRESS,
    //     pass: process.env.GMAIL_PASSWORD
    //   }
    // });




    // var mailOptions = {
    //   from: process.env.GMAIL_ADDRESS,
    //   to: mailList,
    //   subject: "A new examine taken the test",
    //   text: `${examine} has taken the test and got a result of ${result} out of 15`
    // };

    // transporter.sendMail(mailOptions, function(error, info){
    //   var title = ""
    //   if (error) {
    //     console.log(error);
    //     res.render("404",{title: title,currenUser: req.user});
    //   } else {
    //     console.log('Email sent: ' + info.response);
    //     res.send("email successfully sent..");
    //   }
    // });


})


app.listen(port,function(){
	console.log("Server started at port ..." + port);
});



// setInterval(function(){
//   var code = 200;
//   console.log("")
//   console.log("server respons with: " + code + " status code")
// },20000)

