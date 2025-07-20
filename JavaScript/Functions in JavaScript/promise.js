
            // Promises in JavaScript

        // Creating a Promise.

        // Example 1.

// let promise = new Promise((resolve, reject) => {
//     const a = 9 - 3;

//     if(a === 9) {
//         resolve('Promise Resolved');
//     } else {
//         reject('Promise Rejected');
//     }
// })


            // Consuming a promise.

// promise
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((message) => {
//         console.log(message);
//     })
//     .finally(() => {
//         console.log('Execution completed');
//     });
        

// Example 2. Simulating Async Operation

// creating a promise

// function fetchData() {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = [{ id: 1, name: 'Ramachandrappa V' },
//                           { id: 2, name: 'Amruthamma B' },
//                           { id: 3, name: 'Githendra Gowda K R' }
//         ];

//         // const userName = data.find( userName => userName.id === id); 
//         //     if(userName) {
//         //         resolve(userName);
//         //     } else {
//         //         reject('User-Id not found');
//         //     }

//         const userId = data.find( userId => userId.name === name );
//         if(userId) {
//             resolve(userId);
//         } else {
//             reject('UserName not found');
//         }
//         },4000);
//     });
// }


// Creating a Promise.

// function fetchPostsByUser(id) {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const posts = [
//                             { id: 1, post: 'Accountant' },
//                             { id: 2, post: 'Home-Maker' }, 
//                             { id: 3, post: 'Web-Developer Intern' }
//             ];

//             const userPostAvailable = posts.find( post => post.id === id);
//                 if(userPostAvailable) {
//                     resolve(userPostAvailable);
//                 } else {
//                     reject('Post not found for User-id:', id);
//                 }
//             }, 6000); 
//     }); 
// }


// Consuming promise
// const id = 1
// const name = 'Githendra Gowda K R';
// fetchData(name)
//     .then(user => {
//         console.log('Fetching Name for user-name:', name);
//         console.log('User:', user);
//     })
//     .catch(error => {
//         console.log('Error:', error);
//     // })
//     // .finally(() => {
//     //     console.log('Execution Stack Completed');
//     });

// Consuming promise

// const id = 2;
// fetchPostsByUser(id)  
//     .then(posts => {
//         console.log('Fetching Posts for User-id:', id);
//         console.log(posts)
//     })
//     .catch((error) => {
//         console.log('Error: ', error)
//     })
//     .finally(() => {
//         console.log('Execution Stack completed');
//     })


// Example 3. Simulating Async Operation.


// creating promise
// function fetchUserData(name) {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const userData = [
//                 {id: 1, name: 'Arun'},
//                 {id: 2, name: 'Benekesh'}
//             ];

//             const userId = userData.find( user => user.name === name );
//             if(userId) {
//                 resolve(userId);
//             } else {
//                 reject('User Id not Found in the data!.');
//             }
//         }, 3000);
//     });
// }


// consuming promise

// const name = 'Arun';
// fetchUserData(name)
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('Execution stack trace completed');
//     })


// Example 4.

// Chaining Promises

// let userData = [];

// creating Promises

// function fetchData() {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             userData = [
//                
//             ];
            
//             if(userData.length > 0) {
//                 resolve(userData);
//             } else {
//                 reject('No entries found for user-data!');
//             }
//         }, 3000);
//     });
// }

// creating Promises

// function fetchLocation(place) {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             let result = userData.filter( user => user.place === place );
//             if(result.length > 0) {
//                 resolve(result);
//             } else {
//                 reject('No entries found for this location', place);
//             }
//         }, 4000);
//     });
// }

// creating Promises

// function fetchRelation(relation) {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             const userRelationship = userData.filter( user => user.relationship === relation );
//             if(userRelationship.length > 0){
//                 resolve(userRelationship);
//             } else {
//                 reject('No entries found for this relation', relation);
//             }
//         }, 5000);
//     });
// }

// var destination = 'Bengaluru';
// var relation = 'Brother';

// consuming Promises

// fetchData()
//     .then((message) => {
//         console.log(message);
//     })
//     .then(() => {
//         console.log('Fetching user data for the entered location', destination);
//         return fetchLocation(destination);
//     })
//     .then((matchedResults) => {
//         console.log('Users from the location:', matchedResults);
//     })
//     .then(() => {
//         console.log("Fetching user data for the entered relation", relation);
//         return fetchRelation(relation);
//     })
//     .then((matchedRelation) => {
//         console.log('User details for the given relation', matchedRelation);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log('Execution stack trace completed');
//     }); 


// Example 5.

// Promise.all

// creating Promises

// const fetchData = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve('Fetch Product Data');
//     }, 2000);
// })

// const fetchPrice = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve('Fetch Product price');
//     }, 3000);
// });

// const fetchQty = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Product Quantity fetched');
//     }, 5000);
// });


// Promise.all([fetchData, fetchPrice, fetchQty])
//     .then((results) => {
//         console.log('All Data Received');
//         console.log('Product:', results[0]);
//         console.log('Price:', results[1]);
//         console.log('Quantity:', results[2]); 
//     })
//     .catch((error) => {
//         console.log('One or more Promises failed');
//     })
//     .finally(() => {
//         console.log('Execution stack trace completed');
//     }) 


// Promise.any 

// Promise.any:

// in Promise.any the promise gets fulfilled, when any one of the promise is reolved successfuly, but promise.any throws an aggregate error when all of the mentioned promises are rejected.

// const fetchData = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         // resolve('Fetched Product Data');
//         reject('Product data not fetched');
//     }, 1000);
// })

// const fetchPrice = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         // resolve('Fetched Product price');
//         reject('Product price not fetched');
//     });
// })

// const fetchQty = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         // resolve('Fetched product quantity');
//         reject('Product quantity not fetched');
//     },1000);
// });

// const promises = [fetchData, fetchPrice, fetchQty];

// Promise.any(promises)
//     .then((value) => console.log(value))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('Execution Stack trace completed'));


// Example 6. Promise.allSettled

// Promise.allSettled provides an array as output which has the statuses of all the promises

        // const fetchData = new Promise((resolve, reject) => {

        //     setTimeout(() => {
        //         reject('Data fetched..')
        //     }, 2000);
        // })

        // const fetchQty = new Promise((resolve, reject) => {

        //     setTimeout(() => {
        //         reject('Fetched quantity');
        //     }, 2000);
        // }) 
        

        // const promises = [fetchData, fetchQty];

        // Promise.allSettled(promises) 
        //     .then((message) => console.log(message))
        //     .catch((error) => console.log(error))
        //     .finally(() => console.log('Execution stack trace completed'));


// Example 7.
 
// Promise.race

// in Promise.race the the first promise to get completed will be provided.

// const fetchData = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve('Fetched Product Data');
//         // reject('Product data not fetched');
//     }, 1000);
// })

// const fetchPrice = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve('Fetched Product price');
//         // reject('Product price not fetched');
//     }, 1000);
// })

// const fetchQty = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve('Fetched product quantity');
//         // reject('Product quantity not fetched');
//     },1000);
// });



// const promises = [fetchData, fetchQty, fetchPrice];

// Promise.race(promises)
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('Execution stack trace completed'));