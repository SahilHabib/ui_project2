"use strict";
angular.module("appName").directive("contactListForm",[function(){
    return{
        restrict:"EAMC", //element/attribute/comment/class
        //template:"<h1> YEAH DIRECTIVE </h1>"
        templateUrl:"/views/contactListForm.html",
        controller:"contactListCtrl"
//        link:function($scope){
//        $scope.searchMd ="";
//    }
        
    }
    
}]);