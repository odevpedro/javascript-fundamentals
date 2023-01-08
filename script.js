// 'if' statements

let x = 10;

if (x > 5) {
    console.log('x is greater than 5');
}

let y = 4;

if (y > 5) {
    console.log('y is greater than 5');
} else {
    console.log('y is not greater than 5');
}

let z = 4;

if (z > 5) {
    console.log('z is greater than 5');
} else if (z > 3) {
    console.log('z is greater than 3');
} else {
    console.log('z is not greater than 3');
}

// 'for' loops

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Output:
// 0
// 1
// 2
// 3
// 4

let names = ['John', 'Jane', 'Bob'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Output:
// 'John'
// 'Jane'
// 'Bob'

// 'while' loops

let counter = 0;

while (counter < 5) {
    console.log(counter);
    counter++;
}




/**
let password = '';


while (password !== 'password') {
    password = prompt('Enter your password:');
}

console.log('Access granted');
 */