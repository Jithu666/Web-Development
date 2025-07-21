let fruits = ["Mangoes", "Apples", "Oranges", 'Blackberries', 'Strawberries', 'Pomegranate'];

// .push() :- inserts the element at the end of the Array.
fruits.push('Banana');

// prints out all the elements of the list into the console.
// console.log(fruits);

// prints out the element at the specified index onto the console.
// arrayname[indexNumber] :- prints the value present in the specified index, returns -1 if no element is present at the specified index. 
// console.log("Fruit at index 6: ", fruits[6]);
// console.log("Fruit at index 3: ", fruits[3]);
// console.log("Fruit at index 5: ", fruits[5]);
console.log("Fruit at index 6: ", fruits[6]);

// .pop() will remove the element from the last position.
// console.log('Popped out fruit from the Array is : ',fruits.pop());

// unshift will add an element to the beginning of the Array.
fruits.unshift('Guava');
// console.log(fruits);

// .shift() mwthod will remove the first element.
fruits.shift();
// console.log(fruits);

// .length method returns the length of the Array
// console.log('Length of Fruits Array : ', fruits.length)

// Search
let matchIndex = fruits.indexOf('Banana');
// console.log(matchIndex);    

// sort the Array in Alphabetical order.
fruits.sort();
// console.log('Fruits sorted in Alphabetical order: ', fruits);

// sort the Array in Reverse Alphabetical order.
// fruits.sort().reverse();
// console.log('Fruits sorted in Reverse Alphabetical order: ', fruits);

// Arrays.foreach()
// fruits.forEach(element => console.log(element) );

// Arrays.map() 
// console.log(fruits.map((fruit) => fruit.toUpperCase()));
let fruit = fruits.map((item) => item.toLowerCase());
// console.log(fruit);

let fruites = fruits.map((any) => (any + ' ' + any));
// console.log(fruites);

// Arrays.filter()
// .filter method()is used to filter out values based on the given condition.
const new_fruits = fruits.filter((item) => {
    return item === 'Banana';
});
// console.log(new_fruits);

// concat() :- this method is used to concatinate 2 arrays, used to merge 2 arrays. actually not only jsut arrays, you can concatinate an array with a value.
// concatinate does not change the original array, it creates a new one.
const new_fruites = fruits.concat(new_fruits);
// console.log('Array after concatinating: ', new_fruites);

// console.log('Array after concatinating: ', fruit.concat(fruites));

// .find() :- find() takes a callback and returns the matching element based on the conditions specified, and returns undefined if the given condition is not satisfied.
const banana = fruits.find((item) => item === 'Banana' );

// console.log(banana);

// findIndex() :- findIndex() is almost identical to find, except it returns index instead of element. 
const guavaIdx = fruits.findIndex((item) => item === 'Mangoes');
// fruits.push('Banana');
// console.log(fruits);
// console.log('Index of Mangoes is: ',guavaIdx)

// .indexOf() takes the element itself as an entry to search, instead of a callback, and returns the index position, where the element appears for the first time and returns -1 if the specified element is not present in the Array.
// console.log(fruits.indexOf('Banana'));
// console.log(fruits.indexOf('Banana', 4));
// console.log(fruits.indexOf('Grapes', 4));


// .lastIndexOf() takes the element itself as an entry to search, instead of a callback. and return the index of the last position where the element was found.
// console.log(fruits.lastIndexOf('Banana'));
// console.log(fruits.lastIndexOf('Strawberries'));


// .some() :- checks if atleast one of the element matches the given condition in the given Array & returns a boolean value.
// console.log(fruits.some((item) => item === 'Oranges'));
// console.log(fruits.some((item) => item === 'Orange'));

new_F = ['Apple', 'Banana', 'Cherry', 'Date']; 
// .every() :- checks if all the elements matches the given consdition and returns a boolean value.
// console.log(new_F.every((item) => item === 'Apple'));

// .includes() :- takes the element itself to check if it is present in the given Array, while .every() & .some() takes a callback as a argument.
// console.log(fruits.includes('Mangoes'));
// console.log(fruits.includes('Mangoe'));

// .toString() :- used to convert any Array into a String.
// const fruitsString = fruits.toString();
// console.log(fruitsString);

// .join() :- join basically does the same thing as a .toString(), except join gives us the flexibility to choose a separator of our owm. 
// console.log(fruits.join(' '));
// console.log(fruits.join(', '));
// console.log(fruits.join(' + '));
// console.log(fruits.join(''));
// console.log(fruits.join());

// .fill() :- fills the whole Array with the value that you specify in the condition.
// const BananasArray = new_F.fill('Banana');
// console.log(BananasArray);

// const guavaArray = new_F.fill("Guava's", 1);
// const guavaArray1 = new_F.fill("Guava's", 1, 2);

// console.log(guavaArray);
// console.log(guavaArray1);

// .copyWithin() :- copy the elements from our Array to some different position in the same Array.
// const newArray = new_fruites.copyWithin(2);
// console.log('Fruits array is :', fruits)
// const newArray = new_fruites.copyWithin(6);
// const newArray1 = new_fruites.copyWithin(4, 3);
// const newArray2 = new_fruites.copyWithin(4, 2, 4);

// console.log('New Array is: ',newArray2);

// .slice() :-
// const Slice = fruits.slice(2, 6);
// console.log(Slice);
// console.log(fruits);

// reverse() :- reverse's the given Array.
// console.log(new_F.reverse());

// Array.from()
const str = "abcd";
const str1 = "12234"
const fruits1 = Array.from(str, (item) => item);
const fruits2 = Array.from(str1, (item) => Number(item * item));

// console.log(fruits2);

// .isArray() :- returns true if an Array is passed as an argument
// const frui = 'abd';
// console.log(Array.isArray(frui));

// .entries() :- provides the entries of the method
const fruitsEntries = fruits.entries();

// for(let fruit of fruitsEntries){
    // console.log(fruit);
// }

// .keys() :- returns the keys of the Array
const fruitKeys = fruits.keys();
for(let key of fruitKeys) {
    // console.log(key);
}

// values() :- return the values of the Array Object.
const fruitValues = fruits.values();

for(let value of fruitValues) {
    // console.log(value);
}

// .reduce() :- returns the reduced Array after performing the specified calculations.
const arr = [1,2,3,4,5,6,7];

const sum = arr.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);

// find the maximum value in the array.
const max = arr.reduce((acc, cur) => cur > acc ? cur : acc, arr[0]);
const min = arr.reduce((acc, cur) => cur < acc ? cur : acc, arr[0]);
// console.log('Maximum value in the Array is : ', max);
// console.log('Minimum value in the Array is : ', min);

fruits.push('Mangoes')

// return the occurances of a every fruit.
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

// console.log(count);

// reduce without initial value.
const nums = [10, 20, 30];

const reducedValue = nums.reduce((acc, cur) => acc + cur);
console.log(reducedValue);