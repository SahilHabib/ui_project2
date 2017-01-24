"use strict";
angular.module("appName").directive("contactListUpdate",["personHttp",function(personHttp){
    return{
        restrict:"EAMC",
        scope:{
            updateid:"a";
            contactlist:"x";
        },
        //element/attribute/comment/class
        //template:"<h1> YEAH DIRECTIVE </h1>"
        controller:function($scope){
           // alert(personHttp.test);
        $scope.formModels={
            firstName:"",
            lastName:"",
            address:"",
            email:"",
            phoneNumber:""
        };
        },
        templateUrl:"/views/contactListForm.html",
        link:function($scope,element,attr){
            
        scope.$watch("updateid",function(newVal,oldVal){
               // alert(newVal);
            if (newVal!=0) {
                var prom=personHttp.getPersonListUniq(newVal).then(function(res){
                   scope.formModels=data[0];
                })
            }
            
            });
            scope.add=function() {
               // alert("polymorph");
                var tempObj = {
        firstName:$scope.formModels.firstName,
        lastName:$scope.formModels.lastName,
        address:$scope.formModels.address,
        phoneNumber:$scope.formModels.phone,
        email:$scope.formModels.email
        };
            }
     //   scope.formModels={firstName:"from new directive"}
//        $scope.searchMd ="";
        console.log("displaying attribute");
        console.log(attr.updateid);
        console.log(attr.class);
        console.log(attr.id);
            
        alert(attr.updateid);
    }
        
    }
    
}]);