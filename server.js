var express = require('express');
var app = express();

//GET
//hosting static files
app.use(express.static(__dirname + '/'));
console.log("static files initialized...");

//routing
app.get("/",function(req,res) {
        res.send("hello world");
        });
app.get("/sample",function(req,res) {
    res.send("good morning");
});

//launching server
app.listen(8080, function (req,res) {
        console.log("opening port 8080 new");
console.log('applocation launched at localhost:8080');
           });