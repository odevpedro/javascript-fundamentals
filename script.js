// 1. Changing the contents of an element:

// Get the element with the "myDiv" id
var div = document.getElementById("myDiv");
// Change the contents of the element
div.innerHTML = "Hello, World!";

// 2. Adding a new element to the page:

// Create a new paragraph element
var p = document.createElement("p");
// Set the inner HTML of the element
p.innerHTML = "This is a new paragraph.";
// Append the element to the body of the page
document.body.appendChild(p);

// 3. Removing an element from the page:

// Get the element with the "myDiv" id
var div = document.getElementById("myDiv");
// Remove the element from the page
div.parentNode.removeChild(div);

// 4. Modifying an element's style:

// Get the element with the "myDiv" id
var div = document.getElementById("myDiv");
// Change the background color of the element
div.style.backgroundColor = "red";

// 5. Setting an element's attribute:

// Get the element with the "myImage" id
var img = document.getElementById("myImage");
// Set the "src" attribute of the element
img.setAttribute("src", "new-image.jpg");



//Need to be execute in a browser 