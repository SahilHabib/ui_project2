"use strict";
angular.module("appName").directive("contactListTable",[function(){
    return{
        restrict:"EAMC", //element/attribute/comment/class
        //template:"<h1> YEAH DIRECTIVE </h1>"
        templateUrl:"/views/contactListTable.html",
        controller:"contactListCtrl"
//        link:function($scope){
//        console.log($scope.contactList);
//    }
        
    }
    
}]);
//project ->

//new repo
//clone git
//
//npm init
//npm install dependencies
//gitignore
//create new schema -> cubicdb

//tables: studenttbl/classtbl/teacherstbl/batchtbl/sessiontbl
//fields: 
//1-studenttbl: 
//studentid PK
//firstName
//lastName
//address
//phonenumber
//email
//ssn 
//
//2-teachertbl:
//teacherid PK
//firstName
//lastName
//address
//phonenumber
//email
//
//3-classtbl:
//classid PK
//title 
//classlimit //total number of seats
//description
//
//4-sessiontbl:
//sessionid PK
//startid
//enddate
//starttime
//classid FK // asscoiated with class tbl
//teacherid FK //associated with teachertbl
//sessiontitle
//
//5-batchtbl
//batchid PK
//sessionid FK
//studentid FK

//test sql database with FK and PK
//server.js file

//ng-material
//flex-box cheatsheets

