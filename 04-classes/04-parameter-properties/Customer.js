"use strict";
var Customer = /** @class */ (function () {
    // Define a constructor
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
// Let's create an instance
var myCustomer = new Customer("Santi", "Teeragul");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
