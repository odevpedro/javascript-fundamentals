// Concatenation example
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName);  // Output: "John Doe"

// Substring extraction example
let str = "JavaScript";
let sub = str.substring(4, 10);
console.log(sub);  // Output: "Script"

// Replacing a substring example
let sentence = "I love JavaScript";
let newSentence = sentence.replace("JavaScript", "programming");
console.log(newSentence);  // Output: "I love programming"

// Changing the case of a string example
let str1 = "JavaScript";
let upperCase = str1.toUpperCase();
let lowerCase = str1.toLowerCase();
console.log(upperCase); // Output: "JAVASCRIPT"
console.log(lowerCase); // Output: "javascript"

// Splitting a string example
let str2 = "JavaScript,Python,Java,C++";
let arr = str2.split(",");
console.log(arr);  // Output: ["JavaScript", "Python", "Java", "C++"]

// check the presence of a substring example
let str3 = "Hello, welcome to JavaScript";
let check = str3.includes("JavaScript");
console.log(check);  // Output: true

// Trimming whitespaces example
let str4 = "    Hello, welcome to JavaScript    ";
let newStr = str4.trim();
console.log(newStr);  // Output: "Hello, welcome to JavaScript"