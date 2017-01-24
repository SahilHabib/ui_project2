alert("hello world");
angular.module("appName").service("personService",function() {
        var firstName,lastName,address,phone;
    
    this.setFirstName=function(fName) {
        firstName = fName;
    }
    this.setLastName = function(lName) {
        lastName = lName;
    }
    this.setAddress = function(add) {
        address = add;
    }
    this.setPhone = function(ph) {
        phone = ph;
    }
    this.getFirstName = function() {
        return lastName;
    }
    this.getAddress = function() {
        return address;
    }
    this.getPhone = function() {
        return phone;
    }
    this.testValues = function() {
        console.log(firstName);
        console.log(lastName);
        console.log(address);
        console.log(phone);
    }
});