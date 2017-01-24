angular.module("appName").controller("contactListCtrl",["$scope","personFactory","personHttp",function($scope,personFactory,personHttp){
    
    refreshEntries();
    $scope.sampleTest="what the duce";
    $scope.contactList = [];
    
    $scope.updateId = 0;
    $scope.formModels = {
        firstName:"",
        lastName:"",
        address:"",
        phone:"",
        email:""
    };
    
    $scope.delete=function(contactId){
        alert(contactId); personHttp.deletePersonList(contactId).then(function(){
            refreshEntries();
        });
                                                    ;
        
       // alert("delete "+contactId);
    };
    $scope.update=function(contactId){
        
        alert("update "+contactId);
    };
    
    $scope.add = function() {
        var tempObj = {
        firstName:$scope.formModels.firstName,
        lastName:$scope.formModels.lastName,
        address:$scope.formModels.address,
        phoneNumber:$scope.formModels.phone,
        email:$scope.formModels.email
        };
        
        personHttp.postPersonList(tempObj).then(function(response){
            alert("successfully added");
            refreshEntries();    
        });
        //$scope.contactList.push(tempObj);
    }; 

function refreshEntries(){
    var promise= personHttp.getPersonList();
    promise.then(function(response){
        $scope.contactList = response;
       // console.log(response);
        
    });
    }
        
}]);