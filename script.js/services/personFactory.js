"use strict";

angular.module("appName").factory("personFactory",function(){
    var firstName, lastName, address, phone;
      var _this = this;
    
return{
    setFirstName:function(fName){
        _this.firstName = fName;
},
    setLastName:function(lName) {
        _this.lastName = lName;
},
    setAddress:function(add) {
        _this.address = add;
},
    setPhone:function(ph) {
        _this.phone = ph;
},
    getFirstName:function() {
        return_this.firstName;
},
    getLastName:function() {
        return_this.lastName;
},
    getAddress:function() {
        return_this.address;
},
    getPhone:function() {
        return_this.phone;
},

testValues:function() {
    console.log("from factory");
    console.log(_this.firstName);
    console.log(_this.lastName);
    console.log(_this.address);
    console.log(_this.phone);
    }
}
    
                                  
    });