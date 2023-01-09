// Objects

/*
Objects in JavaScript are collections of key-value pairs that can represent real-world entities such as a person, a bank account, or a car. 
Here is an example of a code with explanations of objects, properties, methods, and the this keyword*/

// An object literal
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(person.firstName); // 'John'
console.log(person.lastName); // 'Doe'
console.log(person.age); // 30
console.log(person.fullName()); // 'John Doe'

// A constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.fullName = function() {
        return this.make + ' ' + this.model + ' (' + this.year + ')';
    }
}

let car1 = new Car('Ford', 'Fiesta', 2018);
let car2 = new Car('Toyota', 'Corolla', 2020);

console.log(car1.make); // 'Ford'
console.log(car1.model); // 'Fiesta'
console.log(car1.year); // 2018
console.log(car1.fullName()); // 'Ford Fiesta (2018)'
console.log(car2.make); // 'Toyota'
console.log(car2.model); // 'Corolla'
console.log(car2.year); // 2020
console.log(car2.fullName()); // 'Toyota Corolla (2020)'

// Properties

// An object can have properties with primitive values or references to other objects
let person = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    }
};

console.log(person.name); // 'John'
console.log(person.age); // 30
console.log(person.address.street); // '123 Main St'
console.log(person.address.city); // 'New York'
console.log(person.address.state); // 'NY'

// Methods:

// An object can have methods, which are functions that can perform actions or calculations



// area of a rectangle
let rectangle = {
    width: 10,
    height: 5,
    calculateArea: function() {
        return this.width * this.height;
    }
};


console.log(rectangle.calculateArea()); // 50

// An object with a method that converts Celsius to Fahrenheit
let temperature = {
    celsius: 0,
    fahrenheit: function() {
        return this.celsius * 9/5 + 32;
    }
};

console.log(temperature.fahrenheit()); // 32

// An object with a method that calculates the total price of an order
let order = {
    items: [
        { name: 'Product 1', price: 9.99 },
        { name: 'Product 2', price: 19.99 },
        { name: 'Product 3', price: 29.99 }
    ],
    calculateTotal: function() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i].price;
        }
        return total;
    }
};

console.log(order.calculateTotal()); // 59.97