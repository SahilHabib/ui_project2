"use strict";
angular.module("appName").controller("personCtrl",["$scope", "personService",function($scope,personService){
    alert ("test for error")
   // init();
   // personService.testValues();
    
    function init() {
        personService.setFirstName("obama");
        personService.setAddress("whitehouse");
        personService.setPhone("42314");
    }
    
    $scope.initialize=function() {
        init();
        console.log("fROM PERSON CTRL");
        personService.testValues();
    }
    
    $scope.displayPerson=function() {
        init();
        console.log("from app ctrl")
        personService.testValues();
    }
}]);