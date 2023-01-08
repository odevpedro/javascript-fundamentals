// 'Hello World'
console.log('Hello World');

// Comments
// This is a single-line comment

/*
 This is a
 multi-line comment
*/

// Data types, showing all possible data types in JavaScript
let number = 42;
let string = 'hello';
let boolean = true;
let array = [1, 2, 3];
let object = {
    key: 'value'
};
let undefinedVariable;
let nullValue = null;
let symbol = Symbol();

console.log(typeof number); // 'number'
console.log(typeof string); // 'string'
console.log(typeof boolean); // 'boolean'
console.log(typeof array); // 'object'
console.log(typeof object); // 'object'
console.log(typeof undefinedVariable); // 'undefined'
console.log(typeof nullValue); // 'object'
console.log(typeof symbol); // 'symbol'

// Mathematical operations, all available in JavaScript
let sum = 1 + 2;
let difference = 5 - 2;
let product = 3 * 4;
let quotient = 8 / 2;
let remainder = 7 % 3;
let negation = -sum;

console.log(sum); // 3
console.log(difference); // 3
console.log(product); // 12
console.log(quotient); // 4
console.log(remainder); // 1
console.log(negation); // -3

// Variable naming, different possibilities for doing this
let camelCase = 'camel case';
let snake_case = 'snake case';
let PascalCase = 'Pascal case';
//let kebab-case = 'kebab-case'; // Invalid identifier

console.log(camelCase); // 'camel case'
console.log(snake_case); // 'snake case'
console.log(PascalCase); // 'Pascal case'

// Case-sensitive, example and explanation
let myVariable = 'hello';
let myvariable = 'world';

console.log(myVariable); // 'hello'
console.log(myvariable); // 'world'

// Increment and decrement
let counter = 0;
counter++;
counter--;

console.log(counter); // 0

// Simplified operations
let x = 1;
x += 2; // x is now 3
x -= 1; // x is now 2
x *= 3; // x is now 6
x /= 2; // x is now 3

console.log(x); // 3

// Decimals
let y = 0.1 + 0.2;

console.log(y); // 0.30000000000000004

// Concatenation
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;

console.log(fullName); // 'John Doe'

// Value scope
let globalVariable = 'I am a global variable';

function myFunction() {
    let localVariable = 'I am a local variable';
    console.log(localVariable); // 'I am a local variable'
}

myFunction();
