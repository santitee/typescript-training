class Customer {
    firstName: string;
    lastName: string;   

    // Define a constructor
    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

// Let's create an instance
let myCustomer = new Customer("Santi", "Teeragul");

// myCustomer.firstName = "Santi";
// myCustomer.lastName = "Teeragul";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
