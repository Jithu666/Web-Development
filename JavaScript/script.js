// window.onload = function () {
//   const btn = document.getElementById("mybtn");
//   const text = document.getElementById("demo");

//   const btn1 = document.getElementById("mybtn1");
//   const text1 = document.getElementById("demo1");

//   document.getElementById("mybtn").onclick = function () {
//     document.getElementById("demo").innerHTML =
//       "Content Changed through InnerHtml Property";
//   };

//   document.getElementById("mybtn1").onclick = function () {
//     document.getElementById("demo1").innerHTML =
//       "Hello Jithu From Brave Browser";
//   };

//   btn.onclick = function () {
//     if (text.style.display === "none") {
//       text.style.display = "block";
//     } else {
//       text.style.block = "none";
//     }
//   };

//   btn1.onclick = function () {
//     if (text1.style.display === "none") {
//       text1.style.display = "block";
//     } else {
//       text1.style.display = "none";
//     }
//   };

//   document.getElementById("txt").innerHTML = "This is p tag";
// };

// document.getElementById("btn2").onclick = function () {
//   alert("Hello from External javascript!");
// };

// let a = 6;
// let a = "This is me.";
// console.log(a);

// Data-types in JavaScript.

// Number
// String
// Object
// Null
// Undefined
// Boolean

// functions in JavaScript.
function hello(name) {
  const now = new Date();
  const hour = now.getHours();

  if (hour < 12) {
    console.log("Good Morning", name, "!");
  } else {
    console.log("Good Evening ", name, "!");
  }
}

let obje1 = [
  { Id: 1, Name: "preeti", Company: "Ranstand", Designation: "HR Associate" },
  //   { Id: 2, Name: "Namitha", Company: "Intrainz", Designation: "Sales BD" },
];

let object = [
  { Id: 45, Name: "Rohit" },
  { Id: 25, Name: "Shikar" },
  {
    Id: 18,
    Name: "Virat",
    func: function myFunc(number) {
      console.log("Id: " + object[2].Id + " Name: " + object[2].Name);
      console.log(object[2].Name + "'s Jersey Number is: " + object[2].Id);
    },
  },
  { Id: 42, Name: "Shreyas" },
  {
    Id: 1,
    Name: "Rahul",
    func: function myfunc(number) {
      console.log("Id: " + object[4].Id + " Name: " + object[4].Name);
      console.log("You entered: " + number);
    },
  },
];

document.addEventListener("click", () => {
  console.log("Clicked");
  //   alert("Clicked");
  const conform = confirm("Are you sure, ?");
  console.log(conform);
});

// String Methods.
let str = "Jithu";
let str1 = 3.1415;
// console.log(str.substring(0, 3));
// console.log(str.lastIndexOf("u"));
// console.log(str1.toExponential(6));
// let ans = str1.toString();

// console.log(ans);
// console.log(ans.toLowerCase());

// Date's in JavaScript by using new Date()
let now = new Date();
const date = now.getDate();
const day = now.getDay();
const year = now.getFullYear();
const hours = now.getHours();
const mins = now.getMinutes();
const secs = now.getSeconds();

// console.log("Current Date and Time is: ", now);
// console.log("Today's Date is: ", date);
// console.log("Today is: ", day);
// console.log("Year is: ", year);
// console.log("It is: " + hours + "'o Clock");
// console.log("It is: " + hours + "'o Clock & " + mins + " minutes.");
// console.log(
//   "It is: " + hours + "'o Clock & " + mins + " minutes & " + secs + " seconds."
// );
// console.log(Date());
// console.log(now);

// create date from a string
const dateFromString = new Date("2025-06-30");
// console.log(dateFromString);

// create date from components.
const dateFromComponents = new Date(2011, 12, 12);
// console.log(dateFromComponents);

const d = new Date();
// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.toISOString());

const greet = (userName) => {
  return new Promise((resolve, reject) => {
    const currentHour = d.getHours();
    if (currentHour < 12) {
      //   resolve("Good Morning " + userName);
    } else if (currentHour < 16) {
      //   resolve("Good Afternoon " + userName);
    } else if (currentHour < 22) {
      //   resolve("Good Evening " + userName);
    } else {
      //   reject("Error!");
    }
  });
};

greet("Jithu")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Execution stack trace completed"));

// for loop's, for each loop, for .. of loop, while loop.
// for loop
let arr = [6, 7, 8, 9, 10];
// console.log("For Loop:");
for (let i = 0; i < arr.length; i++) {
  //   console.log(i);
  //   console.log("Index: " + i + " Value at Index : " + arr[i]);
}

// for-each loop
// console.log("For-each Loop:");
arr.forEach((element) => {
  //   console.log((element += 1));
  //   console.log(element);
});

const Object = [
  { Id: 1, Name: "Jithu", Place: "Kammasandra" },
  { Id: 2, Name: "Mahesh", Place: "Ugani" },
  { Id: 3, Name: "Vikas", Place: "Harohalli Thotagalu" },
  { Id: 4, Name: "Kristen", Place: "Katpadi" },
];

// for-of loop
for (const element of Object) {
  //   console.log(element.Name + " -> " + element.Place);
}

// while loop
let i = 0;
// console.log("While Loop:");
while (i < arr.length) {
  //   console.log(arr[i]);
  i++;
}

// if else, switch case statements, break, continue.
let name = "";
if (name) {
  //   console.log("If condition satisfied.");
} else {
  //   console.log("else condition satisfied.");
}

// this keyword in javascript binds to the global scope, and not the local scope of its entity.
let myFunc = function hello() {
  let seconds = 0;
  this.seconds = seconds;
  //   console.log(seconds);
  setTimeout(() => {
    seconds++;
    // console.log(seconds);
  }, 2000);
};

myFunc();

// callbacks
function add(a, b, callback) {
  setTimeout(() => {
    let ans = a + b;
    console.log("Sum of " + a + " and " + b + " is : " + ans);
    callback(a, b);
  }, 3000);
}

// add(10, 20);
// add(100, 20, diff);

// diff(20, 190);

function diff(a, b) {
  if (isNaN(a)) {
    console.log("Enter Numerical value for Number 1");
    return;
  } else if (isNaN(b)) {
    console.log("Enter Numerical value for Number 2");
    return;
  }

  if (a < b) {
    let temp = a;
    a = b;
    b = temp;
  }

  let ansVariable = a - b;
  console.log("Diff of " + a + " and " + b + " is : " + ansVariable);
}

// add(100, 20, diff);

function greeT(callback) {
  console.log("Hello, User");
  setTimeout(() => {
    callback();
  }, 5000);
}

function bye() {
  console.log("Bye, User");
}

// greeT(bye);

// promises

function promise() {
  return new Promise((resolve, reject) => {
    if (true) {
      // resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  });
}

promise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Execution stack trace completed"));

function Func() {
  return new Promise((resolve, reject) => {
    let a = 6;
    setTimeout(() => {
      if (a - 3 == 3) {
        // resolve("Promise resolved " + a + " - 3 " + " = 3");
      } else {
        reject("Promise rejected");
      }
    }, 2000);
  });
}

Func()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Execution completed"));

// SetTimeout
setTimeout(() => {
  //   console.log("Content inside setTimout.");
}, 2000);

// console.log("Content outside setTimout.");

function helloWorld() {
  setTimeout(() => {
    console.log("I was printed after 3 seconds");
  }, 3000);
}

console.log(" Asyn operation, printed immediately");

helloWorld();
