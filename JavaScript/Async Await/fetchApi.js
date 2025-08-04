// fetchUserData();
// let url = "https://jsonplaceholder.typicode.com/todos/";

// Fetch Api using .then
// function fetchUserData() {
//   setTimeout(() => {
//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch data from the given url endpoint.");
//         }
//         return response.json();
//       })
//       .then((data) => {
// // To print the entire data object.
//         // console.log("Data: ", data);
// // response object returns an Array -> To print every data object individually, we access it through its index values.
//         // for (let i = 0; i < 6; i++) {
//         //   console.log("Title: ", data[i].title);
//         // }
// // We can also use an forEach loop in this case to print all the data objects from the Array.
//         data.forEach((element) => {
//           console.log(`Tittle: ${element.title}`);
//         });
//       })
//       .catch((error) => console.log("Error Message: ", error));
//   }, 2000);
// }

// Example 1: Fetch Users data from GitHub. using .then
// fetchUserData();

// function fetchUserData() {
//   const url = "https://api.github.com/users/Jithu666";

//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Error: ", error);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// Example 2: Fetch
const url = "https://jsonplaceholder.typicode.com/todos/";

setTimeout(() => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}, 2000);
