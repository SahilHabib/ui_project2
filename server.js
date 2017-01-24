//<!--var express = require('express');
//var app = express();
//
////GET
////hosting static files
//app.use(express.static(__dirname + '/'));
//console.log("static files initialized...");
//
////routing
//app.get("/",function(req,res) {
//        res.send("hello world");
//        });
//app.get("/sample",function(req,res) {
//    res.send("good morning");
//});
//
////launching server
//app.listen(8080, function (req,res) {
//        console.log("opening port 8080 new");
//console.log('applocation launched at localhost:8080');
//           });


var express = require('express');
var bodyParser = require('body-parser');
var mysql = require("mysql");
var connection = require("express-myconnection");
var basePath = "/service";

var app = express();

app.use(bodyParser.json());  //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ //to support URL-encoded bodies
    extended:true
}));

// Create Sql Connection
app.use(connection(mysql, {
    host     : '127.0.0.1',
    user     : 'personuser',
    password : 'xyz123',
    database : 'persondb'
},'request'));

var getDeleteObj={
    contactInfo:{
        "url":basePath+"/contactinfo/:contactid",
        "query":"DELETE FROM contactinfo WHERE contactid = ?",
        "ids":["contactid"]
    }
}
var getPutObj={
    contactInfo:{
        "url":basePath+"/contactinfo/:contactid",
        "query":"UPDATE contactinfo SET ? WHERE contactId = ?",
        "ids":["contactid"]
    },
}
var getPostObj={
    contactInfo:{
        query:"INSERT INTO contactinfo set ?",
        url:basePath+"/contactinfo",
        ids:[]
    }
}

var getServiceObj = {
    contactInfo:{
        query:"SELECT * FROM contactinfo",
        url:basePath+"/contactinfo",
        ids:[]
    },
    contactInfoUnique:{
        query:"SELECT * FROM contactinfo where contactId=?",
        url:basePath+"/contactinfo/:contactid",
        ids:["contactid"]
    }
}
    
// var getServiceObj = {
//    additionalInfo:{
//        query:"SELECT * FROM additionalinfo",
//        url:basePath+"/additionalinfo",
//        ids:[]
//    },
//    additionalInfoUnique:{
//        query:"SELECT * FROM additinalinfo where contactId=?",
//            url:basePath+"/additionalinfo/:contactid",
//                ids:["contactid"]
//    },
//     additionalInfoContactInfo:{
//        query:"SELECT * FROM contactinfo a INNER JOIN additionalinfo b on b.contactid = a.contactinfoid WHERE a.contactinfoid=?",
//        url:basePath+"/contactinfo/:contactid/additionalinfo",
//        ids:["contactid"]
//    }
//}
//    account:{
//        query:"SELECT * FROM account",
//        url:basePath+"/account",
//        ids:[]
//    },
//     accountUnique:{
//       query:"SELECT * FROM account where accountid=?",
//        url:basePath+"/account/:accountid",
//        ids:["accountid"] 
//    },
//    personAccount:{
//       query:"SELECT * FROM personinfo a INNER JOIN account b on b.personid = a.personinfoid WHERE a.personinfoid=?",
//        url:basePath+"/person/:personid/account",
//        ids:["personid"] 
//    }
//};


for(var key in getServiceObj){
 getServices(getServiceObj[key].url,getServiceObj[key].ids,getServiceObj[key].query);
}

for(var key in getPostObj){
 postServices(getPostObj[key].url,getPostObj[key].ids,getPostObj[key].query);
}

for(var key in getPutObj){
 putServices(getPutObj[key].url,getPutObj[key].ids,getPutObj[key].query);
}
for(var key in getDeleteObj){
 deleteServices(getDeleteObj[key].url,getDeleteObj[key].ids,getDeleteObj[key].query);
}
function getServices(url,ids,query){
    app.get(url,function(req,res,next){   
       req.getConnection(function(err, connection) {
          if (err) return next(err);
          connection.query(query,req.params[ids], function(err, results) {
            if (err){
              console.log(err);
              return next("Mysql error, check your query");  
            }         
            res.json(results);
          });      
        });   
    });
}

function postServices(url,ids,query){
    app.post(url,function(req,res,next){
        var reqObj = req.body;
        req.getConnection(function(err, connection){
            if (err) return next(err);
            connection.query(query,reqObj,function(err,results){
                if (err){
                    console.log(err);
                    return next("Mysql error, check your query ");  
                }         
                res.json(results);
            });
        });
    });
}

function putServices(url,ids,query){
    app.put(url,function(req,res,next){
        var id=req.params[ids];
        var reqObj = req.body;
        req.getConnection(function(err, connection){
            if (err) return next(err);
            connection.query(query,[reqObj,id],function(err,results){
                if (err){
                    console.log(err);
                    return next("Mysql error, check your query ");  
                }         
                res.json(results);
            });
        });
    });
}

function deleteServices(url,ids,query){
    app.delete(url,function(req,res,next){
        req.getConnection(function(err, connection){
            if (err){
                return next(err);
            }
            connection.query(query, req.params[ids], function(err, results){
                if (err){
                    console.log(err);
                }
                res.json(results);
            })
        })
        
    })
}

//Hosting static files
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.redirect('/views/contactList.html');
});




app.listen(3000,function(req,res){
	console.log("Listening to port 3000: localhost:3000");
});


