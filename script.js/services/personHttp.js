angular.module("appName").service("personHttp",["$http",function($http){
    this.personList = [];
    var that = this;
    this.getPersonList = function() {
        return $http({
            method:"GET",
            url:"/service/contactinfo"
        }).then(function(result){
            that.personList = result.data;
            return result.data
        });
    };

    this.getPersonListUniq = function(contactId) {
        return $http({
            method:"GET",
            url:"/service/contactinfo"+contactId
        }).then(function(result){
            that.personList = result.data;
            return result.data
        });
    };

    //post information
    this.postPersonList = function(dataParam){
        return $http({
            method:"POST",
            url:"/service/contactinfo",
            data:dataParam
            
        }).then(function(result){
            return result.status;
        });
    }
    
    this.deletePersonList = function(contactid) {
        return $http({
            method:"DELETE",
            url:"/service/contactinfo/"+contactid
        }).then(function(result){
            return result.status;
        });
    }
    
    this.updatePersonList=function(dataParam) {
        return $http({
            method:"PUT",
            url:"/service/contactinfo/"+contactid,
            data:dataParam
        }).then(function(result){
            return result.status;
        });
    }
}]);