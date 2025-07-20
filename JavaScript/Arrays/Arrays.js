let fruits = ["Mangoes", "Apples", "Oranges", 'Blackberries', 'Strawberries', 'Pomegranate'];

fruits.push('Banana');
console.log("Fruit at index 6: ", fruits[6]);

// prints out all the elements of the list into the console.
console.log(fruits);

// prints out the element at the specified index onto the console.
console.log("Fruit at index 3: ", fruits[3]);
console.log("Fruit at index 5: ", fruits[5]);
console.log("Fruit at index 6: ", fruits[6]);

// .pop() will remove the element from the last position.
// console.log('Popped out fruit from the Array is : ',fruits.pop());

// unshift will add an element to the beginning of the Array.
fruits.unshift('Guava');
// console.log(fruits);

// .shift() mwthod will remove the first element.
fruits.shift();
console.log(fruits);

// .length method returns the length of the Array
// console.log('Length of Fruits Array : ', fruits.length)

// Search
let matchIndex = fruits.indexOf('Banana');
console.log(matchIndex);    