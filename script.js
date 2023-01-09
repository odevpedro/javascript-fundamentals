let fruits = ['apple', 'banana'];

// Add items to the end of the array
fruits.push('pear', 'mango');
console.log(fruits);  

// Add items to the beginning of the array
fruits.unshift('pear', 'mango');
console.log(fruits);  

// Remove last item from the array
fruits.pop();
console.log(fruits);  

// Remove first item from the array
fruits.shift();
console.log(fruits);  

// Sort the array alphabetically
fruits.sort();
console.log(fruits);  

// Reverse the order of the array
fruits.reverse();
console.log(fruits);  

// Find the index of an item in the array
console.log(fruits.indexOf('pear'));  // 0
console.log(fruits.indexOf('watermelon'));  // -1

// Check if the array includes a certain item
console.log(fruits.includes('pear'));  
console.log(fruits.includes('watermelon'));  

// Iterate over the items in the array and perform an action
fruits.forEach(function(item) {
  console.log(item.toUpperCase());
});

