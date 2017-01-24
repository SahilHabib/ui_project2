//calling that module form app.js
//two ways of binding -one way data binging
                 //     - two way
//ng-app -- tell html its going to run angular
//ng-controller-- associate any controller with scope
//ng-click-- button 
//ng-model-- 
// $ scope - default angular services
angular.module("appName").controller("appCtrl",["$scope","personService","personFactory",function($scope,personService,personFactory){
    
    $scope.habib = "Hello world";
    $scope.formModal="george";
    
    $scope.change = function() {
        $scope.habib="God damit, check ur spellings";
        alert($scope.formModal);
    }
    scope.init=function() {
        personService.setFirstName("donald trump");
        personService.setLastName("trump");
        personService.setAddress("trump tower");
    }
    
    
    $scope.displayPerson=function() {
        console.log("from app ctrl");
        personService.testValues();
    }
    
    personFactory.setAddress("test address");
    personFactory.getAddress();
    personFactory.setFirstName("hello world");
    personFactory.setLastName("goodmorning");
    personFactory.testValues();
}]);

