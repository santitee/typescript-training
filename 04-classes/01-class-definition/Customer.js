var Customer = /** @class */ (function () {
    // Define a constructor
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// Let's create an instance
var myCustomer = new Customer("Santi", "Teeragul");
// myCustomer.firstName = "Santi";
// myCustomer.lastName = "Teeragul";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
