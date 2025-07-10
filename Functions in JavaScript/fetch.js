
// Fetch:

// Fetch in javascript is a function that is used to make HTTP requests to fetch resources like JSON styled data, images and files.
//  simplifies asynchronous data fetching in js and used for interacting with API's to retrieve and swnd data Asynchronously over the web.

// fetch(url, {options})

// fetch has 2 arguments 1. url of the resource and 
// 2. options 

// methods can be:
// GET : to get resource (Default).
// POST : to send some data
// PUT :to replace some data
// DELETE : TO delete the data


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
        
//         if(!response.ok) {
//             throw new Error('Could not fetch resource');
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.id))
//     .catch(error => console.log(error));


// Async await

// Example 1:

// async function fetchData() {

//     try {

//         // by passing the pokemon name as url
//         // const response = await fetch ('https://pokeapi.co/api/v2/pokemon/pikachu');


//         // by passing the pokemon name in the input box.
//         const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
//         const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

//         if(!response.ok){
//             console.log('Could not fetch resource');
//         }

//         const data = await response.json();
//         console.log(data);

//         const pokemonSprite = data.sprites.front_default;
//         const pokemonSprite1 = data.sprites.back_default;
//         const pokemonSprite2 = data.sprites.front_shiny;

//         const imgElement = document.getElementById('pokemonSprite');
//         const imgElement1 = document.getElementById('pokemonSprite1');
//         const imgElement2 = document.getElementById('pokemonSprite2');

//         imgElement.src = pokemonSprite;
//         imgElement.style.display = 'block';

//         imgElement1.src = pokemonSprite1;
//         imgElement1.style.display = "block";

//         imgElement2.src = pokemonSprite2;
//         imgElement2.style.display = "block";

//         const pokemonCries = data.cries.latest;

//         const audioElement1 = document.getElementById("pokemonCries");

//         audioElement1.src = pokemonCries;
//         audioElement1.style.display = "block";

//         const pokemonStats = data.stats[0];

//         const statElement = document.getElementById("pokemonStats");

//         statElement.src = statElement;
//         statElement.style.display = "block";

//     }
//     catch(error) {
//         console.error(error);
//     }

// }

// fetchData();


// Example 2:

// GET method, by default does not take any options or methods as such.

// const url = 'https://goweather.herokuapp.com/weather/bengaluru';

// const url1 = 'https://dog.ceo/api/breeds/image/random'

// async function getData() {
//     const response = await fetch(url1);

//     if(!response.ok) {
//         console.log('Could not find data');
//     }
//     const data = await response.json();

//     const dogImage = data.message;

//     const dogImageElement = document.getElementById('dogImage');

//     dogImageElement.src = dogImage;
//     dogImageElement.style.display = 'block';
//     dogImageElement.style.width = '300px';
//     dogImageElement.style.height = '300px';

//     const breedName = dogImage.split('/breeds/')[1].split('/')[0];


//     console.log(breedName.toUpperCase());
// }

// getData();


// Example 3.

    // const myHeaders = new Headers();

    // myHeaders.append("Content-Type", "application/json");

    // const url = "https://jsonplaceholder.typicode.com/posts";

    // // // const options = {
    // // //     method: "POST",
    // // //     body: JSON.stringify({ username: "Jithendra Gowda "}), headers: myHeaders,
    // // // };

    // // // const options1 = {
    // // //     method: "POST",
    // // //     body: JSON.stringify({ username: "Amruthamma "}), headers: myHeaders,
    // // // };
    // const options2 = {
    //     method: "DELETE",
    //     body: JSON.stringify({ username: "Ramachandrappa "}), headers: myHeaders,
    // };

    // // // async function postData() {
        
    // // //     const response = await fetch (url, options);
    // // //     let data = await response.json();
    // // //     console.log("My data: ", data);

    // // // }
    // // // async function postData() {
        
    // // //     const response = await fetch (url, options1);
    // // //     let data = await response.json();
    // // //     console.log("My data: ", data);

    // // // }
    // async function postData() {
        
    //     const response = await fetch (url, options2);
    //     let data = await response.json();
    //     console.log("My data: ", data);

    // }

    // postData();

// async function getData() {

//     // const url1 = "https://jsonplaceholder.typicode.com/posts/100";

//     const url2 = "https://dummyjson.com/posts/6";

//     const response = await fetch(url2);
//     if(!response.ok){
//         console.log('Could not fetch data');
//     }

//     const data = await response.json();

//     const dataTitle = data.title;

//     const pElement = document.getElementById('myP');
    
//     pElement.innerHTML = dataTitle;
//     pElement.style.display = 'block';

//     console.log(data.body);
// }

// getData();

// async function postData() {

//     const response = await fetch('https://dummyjson.com/posts/add', { 
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         title: 'Jithendra Gowda -> I a in-debted to my Dad.',
//         userId: 5, 
//         })
//     })

//     let data = await response.json();
//     console.log(data);

// }
 
// async function processData() {

//     await postData();
//     await getData();
// }

// processData();

// Example 4.

// async function getData() {

//     try {

//         const url = 'https://dummyjson.com/recipes';

//         const response = await fetch(url);

//         const data = await response.json();

//         const recipeArray = data.recipes;

//         const recipeImage = data.recipes.map(recipe => recipe.image);
//         const recipeCategory = data.recipes.filter(recipe => recipe.cuisine == "Indian")

//         const recipeDetails = recipeCategory.map(recipe => {
//             return {
//                 id: recipe.id, 
//                 name: recipe.name,
//                 ingredients: recipe.ingredients,
//                 instuctions: recipe.instuctions
//             };
//         });

//         // const recipeFromCategory = recipeCategory.map(recipe => recipe.name);
//         const recipeName = recipeImage.name;

//         const recipeImageElement = document.getElementById('recipe');
//         // const recipeCategory = 

//         recipeImageElement.src = recipeImage;
//         recipeImageElement.style.display = 'block';

//         if(!response.ok) {
//             console.log('Unable to fetch data for the given api endpoint');
//         } else{
//             console.log(recipeDetails); 
//         }

//     }
//     catch(error) {
//         console.log(error);
//     }
// }

// getData();

