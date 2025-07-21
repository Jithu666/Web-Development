
let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elephant-Foot', 'Fig'];

// iterates through the array and prints the list of elements in the Array. in the order as they appear
// console.log('Fruits in the order they appear: ')
for(let i = 0; i < fruits.length; i++){
    // console.log(fruits[i]);
}

// iterates through the array and prints the list of elements in the Array. in the reverse-order as they appear
// console.log('Fruits in the reverse order: ')
for(let i = fruits.length - 1; i >= 0; i--) {
    // console.log(fruits[i]);
}

// Enhanced for loop (this is a simpler version of the for loop).
// console.log('Fruits in the order they appear: ')
for(let fruit of fruits) {
    // console.log(fruit);
}