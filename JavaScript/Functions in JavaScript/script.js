// Function to print Hello World on the user console.

// function helloWorld(name, age) {
//     console.log("Hello World from Brave Browser");
//     console.log(`Hello ${name} from Brave Browser`);
//     console.log(`you turned ${age} on July 22nd 2024`);
// }

// helloWorld("Jithendra", 22);

// Function to add two Numbers.

// function add(a, b) {
//     return a + b;
// }

// console.log(add(10, 19));

// Function to subtract two Numbers.

// function sub (a, b) {
// return a - b;
// }

// console.log(sub(29, 5));

// Function to multiply two Numbers.

// function mul(a, b) {
// return a * b;
// }

// console.log(mul(1977, 2));

// Function to divide two Numbers.

// function div(a, b) {
// return a / b;
// }

// console.log(div(100, 10));

// Function to check if the given number is even or odd.

// function isEvenOdd(x) {
//     if(x % 2 == 0){
//         return x + " is even"
//     } else {
//         return x + " is odd number"
//     }
// }

// let res = isEvenOdd(161);
// console.log(res);

// Function to check if the given e-mail id is valid or not.

// function isEmailValid(email) {
//     if(email.includes("@") && email.includes(".com")) {
//         return email + " is a valid e-mail id.";
//     } else {
//         return email + " is not a valid e-mail id!"
//     }
// }

// console.log(isEmailValid('githu@gmail.com'));
// setTimeout(isEmailValid('ch@gmail.com'), 4000);

// Function to greet a given user.

// function greet() {
//     console.log("Hello!")
// }

// greet();
// setTimeout(greet, 3000);

// Write a function in javascript to return a random number.

// function randomNumber () {
// console.log(Math.random()*100);
// }

// randomNumber();

// Write a function in javascript to return a random number in the given limits, with only lower limit included.

// function randomNumber(num1, num2) {
//     return Math.floor(Math.random() * (num2 - num1) + num1);
// }

// console.log(randomNumber(2, 9));

// Write a function in javascript to return a random number in the given limits, with both upper and lower limits.

// let ans = function randomNumber(num1, num2) {
//     return Math.floor(Math.random() * (num2 - num1 + 1) + num1);
// }

// console.log(ans(1, 3));

// write an Anonymous function.

// document.getElementById("myBtn").addEventListener("click", function() {
//     console.log("Button Clicked");
// });

// write a function to demonstrate callback functions

// function Timer() {
//     this.seconds = 0;
//     const self = this;

//     function callBack() {
//         self.seconds++;
//         console.log(self.seconds);
//     }

//     setInterval(callBack, 1000);
// }

// new Timer();

// Write a function in javascript to demonstrate setInterval as inner CallBack Function.

// function handleEvent() {
//     this.seconds = 0;
//     const self = this;

//     const ticker = function() {
//         self.seconds++;
//         console.log(self.seconds);
//     }

//     setInterval(ticker, 1000); // this setInterval calls the inner function adn displays the seconds after every second, this is the functionality of the inner function.
// }

// new handleEvent();

// Write a function in javascript to demonstrate setTimeout as inner CallBack Function.

// function handleEvent() {
//     this.greet = "Hello";
//     const self = this;

//     const greet = function() {
//         // self.seconds++;
//         console.log(self.greet);
//     }

//     setTimeout(greet, 2000);
// }

// new handleEvent();

//  Write a callback functio to greet a user and also some other content use setInterval and setTimeout functions

// function handleEvent(name) {
//     this.greet = name;
//     const self = this;

//     const innerFunction = function(greet) {
//         console.log("Hello ", self.greet);
//     }

//     const innerSubFunction = function() {
//         console.log("It is good to see you again,");
//         clearInterval(intervalId);
//     }

//     const intervalID = setTimeout(innerFunction, 1000);
//     const intervalId = setInterval(innerSubFunction, 3000);
// }

// new handleEvent("Arun");

// Function Expressions.
// Function to add two Numbers.

// let add = function (x, y) {
// return x + y;
// }

// console.log(add(2, 100));

// Function to subtract two Numbers.

// let subtract = function(x, y) {
// return x - y;
// }

// console.log(subtract(9, 7));

// Function to multiply two Numbers.

// let product = function(x, y) {
// return x * y;
// }

// console.log(product(6, 5));

// Function to divide two Numbers.

// let divide = function(x, y) {
// return x / y;
// }

// console.log(divide(10, 2));
// setTimeout(divide, 3000);

// Function to greet a given user.

// setTimeout(function () {
// console.log("Hello");
// }, 4000)

// const ans = (name, age) => console.log(`Hello ${name}, you are ${age} years old. and You are a CHutiya,`)
// ans("JIhtu", 22);

// Arrow Functions in JavaScript.

// Arrow Function to greet a given user.

// const greet = () => console.log("Hello Jithu");

// greet();

// Arrow Function to check if the email is valid or not..

// const res_variable = (email) => {
//     if(email.includes("@")) {
//         console.log(`${email} is a valid email address`);
//     } else {
//         console.log(`${email} is not a valid email address`);
//     }
// }

// res_variable("githu@hotmail.com");

// Arrow functions to add two numbers in JS, only if both the numbers are +ve, if any one of the given two numbers are negative, do not perform addition.

// let sum = (num1, num2) => {
//     if(num1 > 0 && num2 > 0){
//         return num1 + num2;
//     } else {
//         return "Kindly enter 2 positive Integers";
//     }
// }

// console.log(sum(-10, 8));

// Function to find the sum of two numbers using functions

// function sum(a, b) {
//     return a+ b;
// }

// console.log(sum(9, 10));

// Function to find the sum of two numbers using Arrow functions

// let ans = (a, b) => { return a + b };

// console.log(ans(10, 40));

// Function to find the difference of two numbers using Arrow functions

// let res = (a, b) => {return a - b};

// console.log(res(29, 1));

// Function to find the product of two numbers using Arrow functions

// var ans = (a, b) => {return a * b};

// console.log(ans(23, 6));

// Function to find the remainder of two numbers using Arrow functions

// var ans = (a, b) => {return a / b};

// console.log(ans(24, 6));

// Greet Function

// function greet(user) {
//     return "Hello " + user;
// }

// console.log(greet('Gaumate'));

// Function which takes only arguement for an arrow functions demonstration.

// const ress = (name) => { console.log("Hello " + name) };

// console.log(ress('Gomate'));

// Write a Function to check if the given number is Positive or Negative

// const res = isNumberPositive(6);
// console.log(res);

// function isNumberPositive(num) {
//     if(num >= 0) {
//         return num + " is Positive";
//     } else {
//         return num + " is Negative";
//     }
// }

// Function which takes only arguement for an Arrow functions demonstration.

// let ans = (num1) => {
//     if(num1 >= 0) {
//         return num1 + " is Positive";
//     } else {
//         return num1 + " is Negative";
//     }
// };

// console.log(ans(-9));

// Function which does not taks any arguement for an arrow functions demonstration.

// let res = () => console.log("Hello Good Evening Dear User");

// res();

// setTimeout(function hello(){
// console.log("Hello World");
// }, 6000);

//  Arrow function to demostrate Anonymous function.

// document.getElementById("myBtn").addEventListener("click", () => console.log("Button Clicked"))

// Visualizing this function working inside a arrow function

// function timer() {
//     this.seconds = 0;

//     setInterval(() => {
//         this.seconds++;
//         console.log(this.seconds);
//     }, 1000)
// }

// new timer();

// Visualizing this function working inside a arrow function

// function Timer() {
//     this.seconds = 0;
//     setTimeout(() => {
//         this.seconds++;
//         console.log(this.seconds);
//     }, 2000);
// }

// new Timer();

// Map Method in JavaScript.

// .map() accepts a callback and applies that function to each element of an array, then return a new array.

// const numbers = [1,2,3,4,5,6];
// const squares = numbers.map((element) => Math.pow(element, 2));
// const cubes = numbers.map((element) => Math.pow(element, 3));

// let number = [4,5,6,7];
// const square = number.map((element) => Math.pow(element, 2));
// console.log(square);

// console.log("Squares:")
// console.log(squares);
// console.log("Cubes:")
// console.log(cubes);

// const square = number.map((element) => (element * element));

// console.log(square);

// const cube = number.map((element) => (element * element * element));
// console.log(cube);

// Get an array of names.

// let people = [
//     {name: "Alice", age: 28},
//     {name: "Jacob", age: 22},
//     {name: "James", age: 28}
// ];

// let names = people.map(person => person.name);
// console.log(names);

// convert the given names to uppercase

// const names = ["Chethan", "Jithu", "Bhavani", "Praveen", "Anup", "Arun"];

// const names_uppercase = names.map(element => element.toUpperCase());

// console.log(names_uppercase);

// convert the given names to lowercase

// const names_lowercase = names.map(elements => elements.toLowerCase());

// console.log(names_lowercase);

// convert the given array values from Fahrenheit to celcius

// const Fahrenheit = [98, 100, 99.2, 101, 102, 103];

// const ans = Fahrenheit.map(element => (element - 32) * 5 / 9);

// console.log(ans);

// convert the given array values from Fahrenheit to celcius

// const celcius = [32, 33, 34, 34, 36, 37, 38, 39, 40];

// const fahrenheit = celcius.map(element => (element * 9/5) + 32);
// console.log(fahrenheit);

// write a script in js to add index values to strings

// const names = ['Jithu', 'Aun', 'Arun', 'Goenka'];

// let idxs = names.map((name, index) => `${index+1}: ${name}`);

// console.log(idxs);

// Add index to strings

// const names = ['Arun', 'Sharma', 'Abhijit', 'Abhilash', 'Febi', 'Mariyam', 'Ranjan'];

// const indexes = names.map((name, index) => `${index + 1}: ${name}`);

// console.log(indexes);

// Extract specific fields from an Object Array.

// let names = [
//     {id: 1, name: 'Alice', email: 'alice@yahoo.com'},
//     {id: 2, name: 'Bob', email: 'bob@yahoo.com'},
//     {id: 3, name: 'Charlie', email: 'charlie@yahoo.com'},
//     {id: 4, name: 'Dane', email: 'dane@yahoo.com'},
//     {id: 5, name: 'Epsy', email: 'epsy@yahoo.com'}
// ];

// let fields = names.map(user => ({name:user.name, email:user.email}));

// console.log(fields);

// Extract specific fields from an Array Object.

// const names = [
//     {name: 'Aplha'},
//     {name: 'Bravo'},
//     {name: 'Charlie'},
//     {name: 'Delta'},
//     {name: 'Beta'},
//     {name: 'Gamma'}
// ];
// const codes = names.map(user => user.name);
// console.log(codes);

// Extract specific fields from an Array object

// const obje = [
//     {id: 1, name:'Vivek', email:'vivek@gmail.com', phone:'9001890111'},
//     {id: 2, name:'charan', email:'charan@gmail.com', phone:'8910182374'},
//     {id: 3, name:'Mani', email:'Mani@gmail.com', phone:'9023423903'},
//     {id: 4, name:'Naveen', email:'naveen@gmail.com', phone:'7891202129'},
//     {id: 5, name:'Benekesh', email:'benekesh@gmail.com', phone:'7829182299'},
//     {id: 6, name:'Ankita', email:'ankita@gmail.com', phone:'9002281333'}
// ];

// const obj = obje.map(user => ({name: user.name, mail: user.email, phone: user.phone}));

// console.log(obj);

//  Write a function to find the (3*n) + 1th value of given values in the array.

// let nums = [1, 2, 3, 4, 5, 6];

// const ans = nums.map(elements => (elements * 3) + 1);

// console.log('Original Values:');
// console.log(nums);
// console.log('Original Value + (3 * n) + 1th values  :');
// console.log(ans);

// What happened here?
// we have created a array nums, which has some values, now this nusm is passed as an callback to .map() where the written function to convert each elcment from nums array to the new value as mentioned in the code after the arraw operator takes place, and the new elements are added to the ans array, but here the old values are not modified.

// Write a function to find the squares of the given elements

// let nums = [1, 2, 3, 4, 5, 6];

// let ans = nums.map(element => (element * element));

// console.log('Original Values :');
// console.log(nums);
// console.log('Squared values :');
// console.log(ans);

// Write a function to find the cubes of the given elements

// let answer  = nums.map(element => (element * element * element));

// console.log('Original Values :');
// console.log(nums);
// console.log('Cubed values :');
// console.log(answer);

// Write a Arrow function using .map method to make all the contents of the array object into uppercase.

// const students = ["Spongebob", "Sqidward", "Patrick", "Sandy"];
// console.log('Students names :')
// console.log(students)

// Arrow Function to convert students names to uppercase.
// console.log('Students names in uppercase :')
// const studentsUpperCase = students.map(element => element.toUpperCase());

// Function called using arrow function by passing elements into StudentsUpperCase function.
// console.log(studentsUpperCase);

// Function called using callback function by passing elements into upperCase function.

// function upperCase(element) {
//     return element.toUpperCase();
// }

// console.log(studentsUpper);

// const studentsUpper = students.map(upperCase);

// Write a Arrow function using .map method to make all the contents of the array object into lowercase.

// console.log('Students names in lowercase :')

// Arrow Function to convert students names to Lowercase
// const namesLowerCase = students.map(element => element.toLowerCase());

// Callback function to convert names to LowerCase
// function lowerCase(element) {
// return element.toLowerCase();
// }

// const studentsLower = students.map(lowerCase);

// Function called using arrow function by passing elements into namesLowerCase function.
// console.log(namesLowerCase);

// Function called using callback function by passing elements into lowerCase function.
// console.log(studentsLower);

// Write a Callback function to format dates

// const date = ["2024-01-19", "2024-06-19", "2024-06-10", "2025-01-14", "2024-03-17"];
// const formattedDates = date.map(formatDates);

// console.log("Original Dates: ")
// console.log(date);

// console.log("Formatted Dates: ")
// console.log(formattedDates);

// function formatDates(element) {
//     const dateFractions = element.split("-");
//     return `${dateFractions[2]}/${dateFractions[1]}/${dateFractions[0]}`;
// }

// Filter in JS

// const even_Numbers = numbers.map((element) => element % 2 === 0);

// const odd_numbers = numbers.filter((element) => element % 2 !== 0);

// console.log("Even Numbers:")
// console.log(even_Numbers);
// console.log("Odd Numbers:")
// console.log(odd_numbers);

// let numbers = [1,3,4,5,6,7,8,9];
// const num = numbers.filter((element) => {
//     return (element - 1) % 3 === 0;
// });

// console.log(num);

// Reduce in JS

// const total = numbers.reduce((accumulator, element) => element + accumulator);
// console.log(total);

// CallBack functions in Javascript

// Callback is a function that is passed as an argument to another function.

// callback functions are used to handle Asynchronous operations:
// 1. Reading a File.
// 2. Network Requests.
// 3. Interacting with Databases.

// Write a callback function in javascript to greet a user.

// function Hello(cbGoodBye) {
//         console.log("Hello");
//         cbGoodBye(leave);
// }

// function goodbye(cbLeave) {
//         console.log("Good Bye!");
//         cbLeave(wait);
// }

// function leave(cbWait) {
//         console.log("you may leave now");
//         cbWait(wait);
// }

// function wait() {
//         console.log("One Second, Can you please wait");
// }

// Hello(goodbye);

// Flow of execution of program

// initially the Hello() is called with the callback to goodbye(), when the hello function completes printing Hello on to the console, it moves on to the next line which invokes the callback function cbGoodBye, so now the function call moves to goodbye function, where cbLeave is added as an callback fucntion, so now GoodBye is printed on to the console and another callback is invoked to leave(), now this leave method executes which also has a callback function attached to it, when the leave method method prints the statement within "", now the interpreter moves on to the next line, which has a callback function for wait() and now wait method will be executed and print the output statement into the console. and once the interpreter reaches the closing braces and there is no more lines of code left to execute, the program comes out of execution stage and the program completes its execution. this was the flow of execution of the callback function.

// Write a callback function in javascript to find the sum of two numbers.

// function sum(a, b, callback) {
//     const resultSum = a + b;
//     callback(resultSum);
// }

// function diff(a, b, callback) {
//     let resultDiff = a - b;
//     callback(resultDiff);
// }

// let prod = (a, b, callback) => {
//     let resultProd = a * b;
//     callback(resultProd);
// }

// let rem = (a, b, callback) => {
//     let resultRem = a / b;
//     callback(resultRem);
// }

// function displayResult(result) {
//     console.log('Result is :', result);
// }

// function displaySum(result) {
//     document.getElementById('sum').innerHTML = 'Sum is : ' + result;
// }

// function displayDiff(result) {
//     document.getElementById('diff').innerHTML = 'Difference is : ' + result;
// }

// function displayProd(result) {
//     document.getElementById('prod').innerText = 'Product is : ' + result;
// }

// function displayRem(result) {
//     document.getElementById('rem').innerHTML = 'Remainder is : ' + result;
// }

// sum(23, 1, displaySum);
// diff(12, 6, displayDiff);
// prod(974, 2, displayProd);
// rem(17, 9, displayRem);

// Example 1:

// function greet(name, callback){
//     console.log("Hi ", name);

//     setTimeout(() => {
//         console.log("Code inside Callback block executed");
//     }, 2000);
//     callback();
// }

// function goodBye() {
//     console.log("Bye ");
// }

// greet("Sanju", goodBye);

// Example 2:

// function Declaration
// function greetUser(username, callback) {
//     console.log('Hello ', username);
//     callback();
// }

// callback function Declaration
// function greet() {
//     console.log("It's nice to meet you here.");
// }

// function call
// greetUser('Sanju', greet);

// initially greetUser method is invoked with "username" parameter and greet() being the callback function, the greetUser method executes and logs the message on to the browser console and then when the next lines goes for execution in the stack trace callback function is called that is greet function is called,
// Now the greet function will be executed and logs the  messages onto the browser console.

// function Declaration
// function talk(callback) {
//     console.log('It was a pleasure talking with you');
//     callback();
// }

// callback function Declaration
// function sayBye() {
//     console.log('\nI will take your leave.');
//     console.log('Bye');
// }

// function call
// talk(sayBye);

// initially talk method is invoked with "sayBye" being the callback function, the talk method executes and logs the message on to the browser console and then when the next lines goes for execution in the stack trace callback function is called that is sayBye function is called,
// Now the sayBye function will be executed and logs the  messages onto the browser console.

// Example 3.

// callback function using setTimeout (Asynchronous).

// Function Declaration
// function fetchData(callback) {

//     console.log('Fetching Data...');

//     setTimeout(() => {
//         console.log('Data Fetched!');
//         callback();
//     }, 4000);
// }

// Callback Function 'processingdata' Declaration
// function processingData() {
//     setTimeout(() => {
//         console.log('Now Processing Fetched Data...');
//     }, 2000);
// }

// Function invokation.
// fetchData(processingData);

// Example 3.

// perform addition of 2 numbers and display the value through a callback function

// function performAddition(x, y, callback) {
//     let result = x + y;
//     callback(x, y, result);
// }

// function displayResult(x, y, result) {
//     console.log('Addition of', x, 'and ', y, 'is:', result);
// }

// performAddition(100, 43, displayResult);

// perform subtraction of 2 numbers and display the value through a callback function

// function performSubtraction(x, y, callback) {
//     var result = x - y;
//     callback(x, y, result);
// }

// function displaySubtractionResult(x, y, result) {
//     console.log('Subtraction of', x, 'and', y, 'is:', result);
// }

// performSubtraction(100, 43, displaySubtractionResult);

// perform multiplication of 2 numbers and display the value through a callback function

// function performMultiplication(x, y, callback) {
//     var result = x * y;
//     callback(x, y, result);
// }

// function displayMultiplicationResult(x, y, result) {
//     console.log('Multiplication of', x, 'and',y, 'is:', result);
// }

// performMultiplication(100, 43, displayMultiplicationResult);

// perform division of 2 numbers and display the value through a callback function

// function performDivision(x, y, callback) {
//     let result = x / y;
//     callback(x, y, result);
// }

// function displayDivisionResult(x, y, result) {
//     console.log('Division of', x, 'and ', y, 'is:', result);
// }

// performDivision(100, 20, displayDivisionResult);

// Example 4.

// Write a js script to execute a callback after timeout.

// function delay(callback) {
//     console.log('Delay function called');

//     setTimeout(() => {
//         console.log('3 Seconds passed..')
//         callback();
//     }, 3000);
// }

// function greet() {
//     console.log('Greet Function called as an callback inside delay function has been executed after 3 seconds timeout.');
// }

// delay(greet);

// Example 5.

// Mouse Events

// document.getElementById('myBtn').addEventListener('click', () => {
//     console.log("Submit Button was Clicked");
// })

// document.getElementById('myBtn').addEventListener('dblclick', () => {
//     console.log("Double click on Submit Button");
// })

// document.getElementById('myBtn').addEventListener('mousedown', () => {
//     console.log('Mouse down event');
// })

// document.getElementById('myBtn').addEventListener('mouseup', () => {
//     console.log('Mouse release event');
// });

// document.getElementById('myBtn').addEventListener('mousemove', () => {
//     console.log('Mouse is been moved ny pixels');
// })

// document.getElementById('myBtn').addEventListener('mouseenter', () => {
//     console.log('Mouse enters an element');
// });

// document.getElementById('myBtn').addEventListener('mouseleave', () => {
//     console.log('Mouse leaves an Element');
// })

// document.getElementById('myBtn').addEventListener('mouseover', () => {
//     console.log('Mouse over the element');
// })

// document.getElementById('myBtn').addEventListener('mouseout', () => {
//     console.log('Mouse taken out from the element');
// })

// Keyboard Events

// document.getElementById('myBtn').addEventListener('keydown', () => {
//     console.log('Key down event')
// });

// document.getElementById('myBtn').addEventListener('keyup', () => {
//     console.log('Key up event')
// });

// Window Events

// window.addEventListener('load', () => {
//     console.log('Web page has been loaded');
// });

// window.addEventListener('resize', () => {
//     console.log('Window Resized');
// });

// window.addEventListener('scroll', () => {
//     console.log('Window scrolled');
// })

// window.addEventListener('unload', () => {
//     console.log('Window unloaded');
// })

// Example 6.

// const numbers = [1, 2, 3, 4, 5, 6];

// const doubled = numbers.map((element) => { return element * element});

// console.log(doubled);

// Example 7.

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// function filterArray(nums, callback) {
//     const result = [];

//     for(let i = 0; i < nums.length; i++){
//         if(callback(nums[i])) {
//             result.push(nums[i]);
//         }
//     }
//     return result;
// }

// const evens = filterArray(nums, function(num) {
//     return num % 2 === 0;
// });

// console.log(evens);

// const filter = nums.filter((element) => element % 2 == 0);

// console.log(filter);

// Example 8.

// function apiRequest(url, callback) {
//     console.log("Calling API: " + url);

//     setTimeout(() => {
//         const data = {user: 'Sanju', age: 22};
//         callback(data);
//     }, 4000);
// }

// function handleResponse(data) {
//     console.log('Data Received', data);
// }

// apiRequest("https://api.google.com/user", handleResponse);

// Object.keys in Javascript

// Object.keys() in js is a built-in method which returns an array of objects own enumerable property names (keys).
// in the same order that it would be enumerated in a for each loop without traversing the prototype chain.

// const user = {
//     name: 'Jithu',
//     age: 23,
//     gender: 'male',
//     location: 'Bangalore',
//     bloodGroup: 'O+'
// }

// const keys = Object.entries (user);
// console.log(keys);

// const user1 = {a: 1, b: 2, c:3, d: 4};

// const key_s = Object.keys(user1);
// console.log(key_s);

// console.log(user.name, " is ", user.age, " years old");

// const user = {
//     name: "Jithu",
//     age: 21,
//     gender: 'Male',
//     college: 'BMSIT&M',
//     graduated: 'Yes',
//     degree: 'MCA'
// }

// const user1 = {
//     name: 'Khanna',
//     age: 25,
//     gender: 'Male',
//     college: 'VIAT',
//     graduated: 'Yes',
//     degree: 'MCA'
// }

// const keyValues = Object.values(user);
// const keyValues1 = Object.values(user1);

// console.log(keyValues);
// console.log(keyValues1);

// console.log(user.name)

// console.log(user1.name)

// Promises in JS

// Write a callback function

// function walkTheDog(callback) {
//     setTimeout(() => {
//         console.log("You walk the Dog!")
//     callback()
//     }, 3000);
// }

// function cleanKitchen(callback) {
//     setTimeout(() => {
//         console.log("You Clean the Kitchen");
//         callback()
//     }, 4000);
// }

// function takeOutTrash(callback) {
//     setTimeout(() => {
//         console.log("Dump the Trash,in the dumpyard");
//         callback();
//     }, 6000);
// }

// invoking callback functions.

// walkTheDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => console.log("You finished all the Callbacks"));
//     });
// });

// Promises in JS.

//  Promises are Asynchronous operations, promise defnitely returns a value, it can either be resolved after completely executing the block of code or reject after not being able to complete the execution of the code blocks.

// function walkDog() {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const walkedDog = true;

//             if(walkedDog) {
//                 resolve("You Walk the Dog");
//             } else {
//                 reject("You DIDN'T walk the Dog.")
//             }
//         }, 4000);
//     });
// }

// function takeOutTrash() {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const trashTaken = false;
//             if(trashTaken) {
//                 resolve("You take out trash, and dump it in the dumpyard");
//             } else {
//                 reject("You DIDN'T take out the Trash");
//             }
//         }, 6000);
//     });
// }

// function cleanKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const cleanedKitchen = true;

//             if(cleanedKitchen) {
//                 resolve("You clean the Kitchen");
//             } else {
//                 reject("You DIDN'T clean the Kitchen");
//             }
//         }, 2000);
//     });
// }

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log("You resolved all the promises")});

// Example 2. promises in javascript

// let promiseFunction = new Promise((resolve, reject) => {

//     let a = 9 - 3;
//     if(a == 6) {
//         resolve('Success');
//     } else {
//         reject("Failed");
//     }
// });

// promiseFunction.then((message) => {
//     console.log('This promise is Resolved');
// }).catch((message) => {
//     console.log('This Promise is Rejected');
// })

//  Example 3.

// let promiseFunction = new Promise((resolve, reject) => {

//     const bool = false;

//     if(bool) {
//         resolve('Promise Resolved');
//     } else {
//         reject('Promise Rejected');
//     }
// });

// promiseFunction.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error);
// });

// Example 4.

// const promiseFunction = new Promise((resolve, reject) => {

//     let res1 = 3 + 3;

//     if(res1 == 6) {
//         resolve('Promise Resolved');
//     } else {
//         reject('Promise Resolved');
//     }
// });

// const prommiseFunction1 = new Promise((resolve, reject) => {

//     const res2 = 24 / 4;
//     if(res2 == 6) {
//         resolve('Promise Resolved');
//     } else {
//         reject('Promise Rejected');
//     }
// })

// const promiseFunction2 = new Promise((resolve, reject) => {

//     const success = true;
//     if(success) {
//         resolve('Promise Resolved');
//     } else {
//         reject('Promise Rejected');
//     }
// })

// const promiseFunction3 = new Promise((resolve, reject) => {

//     const success = true;
//     if(!success) {
//         resolve('Promise Resolved');
//     } else {
//         reject('Promise Rejected');
//     }
// })

// Promise.allSettled([
//     promiseFunction,
//     prommiseFunction1,
//     promiseFunction2,
//     promiseFunction3,
// ]).then((message) => {
//     console.log(message)
// }).catch((message) => {
//     console.log(message)
// })
