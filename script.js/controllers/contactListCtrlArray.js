angular.module("appName").controller("contactListCtrl",["$scope","personFactory",function($scope,personFactory){
    $scope.contactList = [];
    
    $scope.formModels = {
        firstName:"",
        lastName:"",
        address:"",
        phone:""
    };
    
    $scope.update = function() {
        var tempObj = {
        firstName:$scope.formModels.firstName,
        lastName:$scope.formModels.lastName,
        address:$scope.formModels.address,
        phone:$scope.formModels.phone,
        };
            $scope.contactList.push(tempObj);

    };
    
    var person1 = {
        firstName:"john",
        lastName:"doe",
        address:"test",
        phone:"1234"
    };
    
    var person2 = {
        firstName:"john",
        lastName:"doe",
        address:"test",
        phone:"1234"
    };
    
    var person3 = {
        firstName:"john",
        lastName:"doe",
        address:"test",
        phone:"1234"
    };
    
    $scope.contactList.push(person1);
    $scope.contactList.push(person2);
    $scope.contactList.push(person3);

    


}]);