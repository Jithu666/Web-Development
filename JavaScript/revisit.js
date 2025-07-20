// Function to print Hello world into the User Console.
function printHello() {
  console.log("Hello World!");
}

// Function to print Hello world onto the browser-console.
function printHelloWorld() {
  window.alert("Hello World!");
}

// Function to greet the user on the User Console.
// function handleForm(event) {
//   console.log("Form Submitted");
//   event.preventDefault();

//   const form = {};

//   const name = document.getElementById("name").value;
//   console.log("Hello", name, "Nice to meet you!");
// }

// function greetUser() {

// }

// FORM 1
// function handleForm(event) {
//   console.log("Form Submitted");
//   event.preventDefault();

//   const formData = {};

//   formData_name = document.getElementById("name").value;
//   formData_phone = document.getElementById("phoneNumber").value;
//   formData_email = document.getElementById("email").value;
//   formData_passwd = document.getElementById("passwd").value;

//   console.log("Name: ", formData_name);
//   console.log("Phone: ", formData_phone);
//   console.log("E-mail: ", formData_email);
//   console.log("Password: ", formData_passwd);

// }

// FORM 2

// const handleForm = (event) => {
//   console.log("Form Submitted");
//   event.preventDefault();

//   const formData = {};

//   formData.name = document.getElementById("name").value;
//   formData.phone = document.getElementById("phone").value;

//   console.log("Name: ", formData.name);
//   console.log("Phone Number: ", formData.phone);
// };

// FORM 3

// function handleForm(event) {
//   console.log("Form Submitted");
//   event.preventDefault();

//   const formData = {};
//   const email = document.getElementById("email").value;
//   const passwd = document.getElementById("passwd").value;

//   console.log("E-Mail:", email);
//   console.log("Password: ", passwd);
// }

// FORM 4

// function handleForm(event) {
//   console.log("Form Submitted");
//   event.preventDefault();

//   const form = {};

//   form_name = document.getElementById("name").value;
//   form_age = document.getElementById("age").value;
//   form_dob = document.getElementById("dob").value;

//   const gender = document.getElementsByName("gender");
//   let form_gender = "";
//   for (const radio of gender) {
//     if (radio.checked) {
//       form_gender = radio.value;
//       break;
//     }
//   }

//   const education = document.querySelectorAll(
//     'input[name="education[]"]:checked'
//   );
//   const form_education = Array.from(education).map((cb) => cb.value);

//   console.log("Name: ", form_name);
//   console.log("Age: ", form_age);
//   console.log("Gender: ", form_gender);
//   console.log("Educational Qualification: ", form_education);
//   console.log("Date of Birth: ", form_dob);
// }

// DOM MANIPULATION
// document.getElementById("changeTextBtn").addEventListener("click", function () {
//   document.getElementById("text").textContent = "Text Changed";
// });

// Access DOM contents using ID
// const text = document.getElementById("text");
// const textContents = document.getElementById("textContents");
// console.log(text);
// console.log(textContents);

// Access DOM contents using Class-Name
// const textC = document.getElementsByClassName("myP");
// console.log(textC);

// Access DOM contents using TagName
// const textFields = document.getElementsByTagName("p");
// console.log(textFields);

// Access DOM contents using QuerySelector
// const querySelect = document.querySelector("p");

// Access DOM contents using QuerySelectorAll
// const querySelect = document.querySelectorAll("p");
// console.log(querySelect);

// Update DOM contents using ID
// Update-content by using InnerHTML
// document.getElementById("text").innerHTML = "Content Updated";

// Update-content by using QuerySelector
// document.querySelector("p").innerText = "Updated Content using DOM properties";

// Update-content by using QuerySelectorAll
// document.querySelectorAll("p").innerText = "Updated Content using DOM properties";

// Update-content by using textContent
// document.getElementById("text").textContent = "Dom Content Updated";

// Update-content by using outerHTML
// document.getElementById("text").outerHTML =
//   "Updated Content through DOM Manipulation";

// Insert content
// By using appendChild()

// const newChild = document.createElement("strong");

// newChild.innerHTML = "Inserted Content";

// document.getElementById("text").appendChild(newChild);

// By using Insert Adjacent Element
// Insert Adjacent Element can be used to insert the newly-created element in four positions accordingly, that is
// 1. beforebegin -> Before the beginning of the element specified in document tree.
// 2. afterbegin  -> After the element specified in document tree.
// 3. beforeend -> Before the end of the element specified in document tree.
// 4. afterend -> After the element specified in document tree.

// Steps to insert a new element into the DOM Tree is :
// 1. Create the Element.
//  2. Add content to the newly created Element.
//  3. Insert the element at the desired position by Manipulating DOM.

// Create Element.
// const para = document.createElement("p");
// const para1 = document.createElement("p");
// const para2 = document.createElement("p");
// const para3 = document.createElement("p");

// Add Content tot the newly created Element.
// para.innerHTML =
//   "Content Inserted through DOM Manipulation at the Before-Begin position of the target-element.";
// para1.innerHTML =
//   "Content Inserted through DOM Manipulation at the After-Begin position of the target-element.";
// para2.innerHTML =
//   "Content Inserted through DOM Manipulation at the Before-End position of the target-element.";
// para3.innerHTML =
//   "Content Inserted through DOM Manipulation at the After-End position of the target-element.";

// Insert the new-element.
// document.getElementById("dom").insertAdjacentElement("beforebegin", para);
// document.getElementById("dom").insertAdjacentElement("afterbegin", para1);
// document
//   .getElementById("submitButton")
//   .insertAdjacentElement("beforeend", para2);
// document
//   .getElementById("submitButton")
//   .insertAdjacentElement("afterend", para3);

// // By using Insert Adjacent HTML
// Insert Adjacent HTML can be used to insert the newly-created element in four positions accordingly, that is
// 1. beforebegin -> Before the beginning of the element specified in document tree.
// 2. afterbegin  -> before the first child specified in document tree.
// 3. beforeend -> After the last child of the element specified in document tree.
// 4. afterend -> After the element itself specified in document tree.

// Creating a new Element
// const newContent = `<div style="color: black; background-color: white">DOM content modified through Insert Adjacent HTML</div>
// <p style="color:white; background-color: green">This is a content before the target element itself</p>`;

// const newContent1 = `<div style="color: black; background-color: white">DOM content modified through Insert Adjacent HTML</div>
// <p style="color: white; background-color: green">This is a content before the first child of the target element</p>`;

// const newContent2 = `<div style="color: black; background-color: orange">DOM content modified through Insert Adjacent HTML</div>
// <p style="color: black; background-color: white">This is a content after the last child of the target element</p>`;

// const newContent3 = `<div style="color: black; background-color: orange">DOM content modified through Insert Adjacent HTML</div>
// <p style="color: black; background-color: white">This is a content after the target element itself.</p>`;

// Insert content
// document.querySelector("#dom").insertAdjacentHTML("beforebegin", newContent);
// document.querySelector("#dom").insertAdjacentHTML("afterbegin", newContent1);
// document
// .querySelector(".container")
// .insertAdjacentHTML("beforeend", newContent2);
// document
// .querySelector(".container")
// .insertAdjacentHTML("afterend", newContent3);

// Function to add 2 numbers
// function add() {
//   let num1 = Number(document.getElementById("num1").value);
//   let num2 = Number(document.getElementById("num2").value);

//   let ans = num1 + num2;
//   console.log("Sum of ", num1, "and", num2, "is", ans);
// }

// Function to sub 2 numbers
// function sub() {
//   let num1 = Number(document.getElementById("num1").value);
//   let num2 = Number(document.getElementById("num2").value);

//   let ans = num1 - num2;
//   console.log("Subtraction of ", num1, "and", num2, "is", ans);
// }

// Function to multiply 2 numbers
// function mul() {
//   let num1 = Number(document.getElementById("num1").value);
//   let num2 = Number(document.getElementById("num2").value);

//   let ans = num1 * num2;
//   console.log("Product of ", num1, "and", num2, "is", ans);
// }

// Function to divide 2 numbers
// function div() {
//   let num1 = Number(document.getElementById("num1").value);
//   let num2 = Number(document.getElementById("num2").value);

//   let ans = num1 / num2;
//   console.log("Division of ", num1, "and", num2, "is", ans);
// }

// Function to greet a user.
// window.addEventListener("load", () => {
//   const userName = prompt("Enter your name: ");

//   if (userName) {
//     alert("Hello " + userName);
//   } else {
//     alert("Hello User");
//   }
// });

// Function to check if the given number is even or odd
// const isEvenOdd = () => {

//     const isOdd = document.getElementById('isOdd').value;
//     const res = isOdd % 2 === 0 ? 'Even' : 'Odd';
//     console.log(res);
// }

// Function to check the given email-id is valid
// function validateEmail() {
//     const mail = document.getElementById('email').value;

//     if (mail.includes("@")) {
//         console.log('Valid');
//     } else {
//         console.log("invalid email")
//     }

// }

// Write a function to generate random number.
// function randomNumber() {
// console.log(Math.floor(Math.random()*100))
// }

// Function to generate random number between the given limits
// const randomNumber = () => {
//     const lowerLimit = Number(document.getElementById('lowerLimit').value);
//     const upperLimit = Number(document.getElementById('upperLimit').value);

//     if(isNaN(lowerLimit)) {
//         alert('Please enter a valid lower limit')
//     }

//     if(isNaN(upperLimit)) {
//         alert('Please enter a valid upper limit')
//     }
//     console.log(Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit));
// }

// Write a function in javascript to print a random number between the given limits.
// const randomNumber = () => {

//     const lowerLimit = Number(document.getElementById('lowerLimit').value);
//     const upperLimit = Number(document.getElementById('upperLimit').value);

//     if(isNaN(lowerLimit)) {
//         alert('Kindly enter a valid Lower Limit');
//     } if(isNaN(upperLimit)) {
//         alert('Kindly enter a valid Upper Limit');
//     }

//     const answerKey = Math.floor(Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit);

//     console.log(answerKey);
// }

// Write a anonymous function in Javascript
// const eventHandler = function () {
//   console.log("This is a Anonymous inner function.");
// };

// write a function to demonstrate callback function, setInterval & setTimeout.

// function eventHandler() {
//   console.log("Outer function");
//   function callback() {
//     console.log("inner function");
//   }
//   // setInterval will be executed every 2 seconds
//   //   setInterval(callback, 2000);

//   // setTimeout will be executed after 2 seconds after which the eventHandler has been executed.
// //   setTimeout(callback, 2000);
// }

// Demonstrate the use of this keyword in javascript

// function timer() {
//   this.seconds = 0;
//   setInterval(() => {
//     this.seconds++;
//     console.log(this.seconds);
//   }, 2000);
// }

// new timer();

// demonstrate the use of setInterval function
// function timer() {
//   this.seconds = 0;
//   this.intervalId = null;

//   this.start = () => {
//     if (this.intervalId === null) {
//       this.intervalId = setInterval(() => {
//         this.seconds++;
//         console.log(this.seconds);
//       }, 2000);
//     }
//   };

//   this.stop = () => {
//     clearInterval(this.intervalId);
//     this.intervalId = null;
//   };
// }

// const t = new timer();
// t.start();
// t.stop();

// map method in javascript.
// let numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map((element) => element * element);
// console.log(squares);

// let numbers = [6, 7, 8, 9, 10];
// const cubes = numbers.map((element) => element * element * element);
// console.log(cubes);

// Array Destructuring
// let people = [
//   { name: "Alice", age: 27 },
//   { name: "Bob", age: 21 },
//   { name: "Charles", age: 70 },
// ];

// let names = people.map((names) => names.name);
// console.log(names);

// let ages = people.map((ages) => ages.name);
// let age_s = people.map((ages) => ages.age);
// console.log(age_s);
// let names_upper = ages.map((names) => names.toUpperCase());
// let names_lower = ages.map((names) => names.toLowerCase());

// console.log(names_upper);
// console.log(names_lower);

// write a javascript function to convert celcius to fahrenheit
// let celcius = [32, 33, 34, 35, 36, 37];

// let fahrenheit = celcius.map((element) => (element * 9) / 5 + 32);
// console.log(fahrenheit);

// greet user based on the time he logs in.
// function greetUser(name) {
//   const now = new Date();
//   const hour = now.getHours();
//   let greeting = "";

//   if (hour < 12) {
//     console.log("Good Morning", name);
//   } else if (hour < 16) {
//     console.log("Good Afternoon", name);
//   } else {
//     console.log("Good Evening", name);
//   }
// }

// greetUser("jithu");

// Write a function in Javascript to add index value to strings.
// const names = ["Jithu", "Amrutha", "Ramachandra"];
// let index = names.map((name, index) => `${index + 1}: ${name}`);

// console.log(index);

// Write a function in Javascript to add index value to strings.
// let names = ["Jithu", "Amrutha", "Ramachandra", "Gomathye"];

// let index = names.map((name, index) => `${index + 1}: ${name}`);
// console.log(index);

// extract specific feild from array object.
// let arrayObject = [
//   { id: 1, name: "Alice", email: "alice@hotmail.com" },
//   { id: 2, name: "Bob", email: "bob@hotmail.com" },
//   { id: 3, name: "Charles", email: "charles@yahoo.com" },
//   { id: 4, name: "Dane", email: "dane@hotmail.com" },
//   { id: 5, name: "Fedrick", email: "fedrick@hotmail.com" },
//   { id: 6, name: "Gadot", email: "gal@yahoo.com" },
// ];

// let fields = arrayObject.map((user) => ({
//   name: user.name,
//   email: user.email,
// }));
// console.log(fields);

// let names = [
//   { id: 1, name: "Jithendra", blood_group: "O+", contact: "9034783489" },
//   { id: 2, name: "Vikas", blood_group: "O+", contact: "7406210296" },
//   { id: 3, name: "Mahesh", blood_group: "A+", contact: "7349016849" },
//   { id: 4, name: "Vasanth", blood_group: "AB+", contact: "9023902319" },
//   { id: 5, name: "Manikanta", blood_group: "A-", contact: "9012901290" },
//   { id: 6, name: "Benekesh", blood_group: "B+", contact: "9034783412" },
// ];

// let values = names.map((user) => ({
//   Name: user.name,
//   Blood_Group: user.blood_group,
//   Contact_details: user.contact,
// }));

// console.log(values);

// implement map in javascript
// let nums = [1, 2, 2, 3, 4, 5, 6, 7];

// const ans = nums.map((num) => num * 3 + 1);
// console.log(nums);
// console.log(ans);

// Convert the given string to uppercase.

// const students = ["spongebob", "Squarepants", "sqidward", "patrick", "sandy"];

// const studentsUpper = students.map((student) => student.toUpperCase());
// console.log(studentsUpper);
// const studentsLower = students.map((student) => student.toLowerCase());
// console.log(studentsLower);

// write a callback function to format dates.

// const dates = ["2024-01-10", "2023-12-19", "2023-10-01", "2025-01-10"];

// setTimeout(() => {
//   const formatDates = dates.map(formatDate);
//   console.log("Formatted-Dates: ", formatDates);
// }, 4000);

// function formatDate(element) {
//   const dateFraction = element.split("-");
//   return `${dateFraction[2]}/${dateFraction[1]}/${dateFraction[0]}`;
// }

// console.log(dates);

// const dates = [
//   "2019-12-20",
//   "2021-09-26",
//   "2023-12-15",
//   "2024-12-25",
//   "2025-12-25",
// ];

// function formatDates(element) {
//   let dateFraction = element.split("-");
//   return `${dateFraction[2]}/${dateFraction[1]}/${dateFraction[0]}`;
// }

// setTimeout(() => {
//   const formattedDates = dates.map(formatDates);
//   console.log("Formatted Dates : ", formattedDates);
// }, 3000);

// console.log(dates);

// let nums = [2, 3, 4, 5, 6, 7, 8, 9];

// let filterr = nums.filter((nums) => nums % 3 == 0);
// console.log(filterr);

// var filter = nums.filter((nums) => nums % 2 === 1);
// console.log(filter);

// let filter = nums.filter((num) => num > 5 && num < 10);
// console.log(filter);

// callback functions

// function hello(bye) {
//   console.log("Hello User");
//   setTimeout(() => {
//     bye();
//   }, 3000);
// }

// function bye() {
//   console.log("bye user");
// }

// hello(bye);

// function apiRequest(url, callback) {
//   console.log("Calling api:" + url);

//   setTimeout(() => {
//     const data = { user: "Jithu", age: 22 };
//     callback(data);
//   }, 4000);
// }

// function handleResponse(data) {
//   console.log(data);
// }

// apiRequest("https://api.google.com/user", handleResponse);

// function apiRequest(url, callback) {
//   console.log("Calling Api: " + url);
//   setTimeout(() => {
//     const user = { user: "Jithu", age: 22 };
//     callback(user);
//   }, 2000);
// }

// function handleResponse(data) {
//   console.log(data);
// }

// apiRequest("https://api.github.com/Jithu666", handleResponse);

// promises in js

// function hello() {
//   return new Promise((resolve, reject) => {
//     const greet = false;
//     if (greet) {
//       resolve("Hello User");
//     } else {
//       reject("User request not found");
//     }
//   });
// }

// hello()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function greetUser() {
//   return new Promise((resolve, reject) => {
//     const now = new Date();
//     const hour = now.getHours();
//     let user = document.getElementById("name").value;

//     if (user.trim() === "") {
//       reject("Kindly enter your Name: ");
//     } else if (hour > 12) {
//       resolve("Good Evening " + user);
//     } else {
//       reject(user + ", kindly visit tommorow");
//     }
//   });
// }

// function runGreeting() {
//   greetUser()
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// promise

// function promiseFunc() {
//   return new Promise((resolve, reject) => {
//     let userVariable = document.getElementById("name").value;
//     let ageVariable = document.getElementById("age").value;

//     if (isNaN(ageVariable) || ageVariable <= 17) {
//       reject("You are not eligible to vote " + userVariable);
//     } else {
//       resolve("You are eligible to vote " + userVariable);
//     }
//   });
// }

// function isValidVoter() {
//   promiseFunc()
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => console.log(error));
// }

// promise
// function promiseFunc() {
//   return new Promise((resolve, reject) => {
//     const phy = document.getElementById("physics").value;
//     const che = document.getElementById("chemistry").value;
//     const mat = document.getElementById("maths").value;

//     const url = "https://www.ntaneet.ug.in";

//     if (phy < 35 && che >= 35 && mat >= 35) {
//       reject(
//         "Your Neet scorecard is not available as you have scored less than 35 marks in Physics."
//       );
//     } else if (phy >= 35 && che < 35 && mat >= 35) {
//       reject(
//         "Your Neet scorecard is not available as you have scored less than 35 marks in Chemistry."
//       );
//     } else if (phy >= 35 && che >= 35 && mat < 35) {
//       reject(
//         "Your Neet scorecard is not available as you have scored less than 35 marks in Maths."
//       );
//     } else {
//       resolve("You can download your Neet Scorecard from " + url);
//     }
//   });
// }

// function invokePromise() {
//   promiseFunc()
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally(() => {
//       console.log("Execution stack trace completed");
//     });
// }

// Promise's

// Creating a Promise.
// function promise() {
//     return new Promise((resolve, reject) => {
//     const num1 = Number(document.getElementById("num1").value);
//     const num2 = Number(document.getElementById("num2").value);

//     if (isNaN(num1)) {
//         reject("Enter a valid number for Number 1");
//     } else if (isNaN(num2)) {
//         reject("Enter a valid number for Number 2");
//     } else if ((num1 + num2) % 2 == 1) {
//         resolve("The result is a Odd number");
//     } else {
//         resolve("The result is a Even number");
//     }
//     });
// }

// Consuming a promise
// function calculateSum() {
//   promise()
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));
// }


// Creating promise

// function fetchData() {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = [
//                 {id: 1, name: 'Jithendra'},
//                 {id: 2, name: 'Amrutha'},
//                 {id: 3, name: 'Ramachandra'}
//             ];
        
//             const userName = data.find(userName => userName.id === id);
//             if(userName){
//                 resolve(userName);
//             } else {
//                 reject('Username not found');
//             }
//         }, 2000);
//     });
// }

// const id = 1;
// fetchData(id) 
//     .then(user => {
//         console.log(name);
//         console.log(user);
//     })
//     .catch(error => {
//         console.log(error);
//     });

