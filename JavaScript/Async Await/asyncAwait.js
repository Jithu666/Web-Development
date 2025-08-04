// Async Await in javaScript.

// getRandomDog()
// Example 1: Get a random Dog Image

// async function getRandomDog() {

// const url = "https://dog.ceo/api/breeds/image/random";
// try {
//   const response = await fetch(url);
//   const data = await response.json();

//   console.log(data);
//   // console.log(data.message);
//   const imageElement = document.getElementById("image");
//   imageElement.src = data.message;

//   // console.log("Hello");
// } catch (error) {
//   console.log("Failed to fetch Dog Image: " + error);
// }
// }

// randomCatFact();
// Example 2: Get a random Cat Fact

// async function randomCatFact() {
//   const url = "https://catfact.ninja/fact";
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     setTimeout(() => {
//       console.log(data.fact);
//     }, 3000);
//   } catch (error) {
//     console.log("Could not fetch Cat Fact: " + error);
//   }
// }

// getRandomActivity();
// Example 3: Get a random Activity.

// async function getRandomActivity() {
//   try {
//     const url = "https://www.boredapi.com/api/activity";

//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new error("Url Endpoint did not fetch the desired outcomes.");
//     }
//     const data = await response.json();

//     // Output the data in JSON format.
//     console.log(data);
//   } catch (error) {
//     console.log("Could not get any Activity: " + error);
//   }
// }

// weatherApi();
// Exapmle 4: Get Weather of a city
// async function weatherApi() {
//   // For Kolkata
//   // const lat = 22.5726;
//   // const lon = 88.3639;

//   // For Tokyo
//   const lat = 35;
//   const lon = 139;

//   try {
//     const urlEndpoint = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

//     const response = await fetch(urlEndpoint);
//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log("Could not fetch Weather Information: " + error);
//   }
// }

// getUsersData();
// Example 4: Get Users data from a public API.
// async function getUsersData() {
//   const url = "https://jsonplaceholder.typicode.com/users";
//   try {
//     const response = await fetch(url);

//     // Throw an error if response status code is other than 200.
//     if (!response.ok) {
//       console.log("Error Fetching user data");
//     } else {
//       const data = await response.json();
//       //   console.log(data); // Returns a Array of Objects.

//       data.forEach((element) => {
//         // console.log(element); // Prints the entire Object from the Array.
//         // console.log(element.name);  // Prints only names from the Array object.
//         // console.log(element.username); // Prints only usernames from the Array object.
//         // console.log(element.email); // Prints only email from the Array object.
//         // console.log(element.address); // Prints only Address from the Array object.
//         // console.log(element.company); // Prints all the details of Company from the Array object.
//         // console.log(element.phone); // Prints only Phone Numbers from the Array object.
//         // console.log(element.website); // Prints only website from the Array object.
//         // console.log(element.address.street); // Prints only Address->Street from the Array object.
//         // console.log(element.address.city); // Prints only Address->City from the Array object.
//         // console.log(element.company.name); // Prints only Company Name from the Array object.
//         // console.log(element.company.catchPhrase); // Prints only catchPhrases from the Array object.
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// Callbacks
// getUserData(getStudentsData);
// Fetch user Data using Async await.
// async function getUserData(callback) {
//   const url = "https://hp-api.onrender.com/api/characters"; // Harry potter Characters.
//   const response = await fetch(url);
//   const data = await response.json();

//   // console.log(data[0]);
//   // console.log("Data object 1 starts from here:");
//   // console.log(data[1]);

//   console.log("Characters Data Length:- ", data.length);
//   for (let i = 0; i < data.length && i < 6; i++) {
//     console.log(data[i].name);
//   }
//   console.log("Callback function to be executed");
//   callback();
// }

// async function getStudentsData() {
//   const url1 = "https://hp-api.onrender.com/api/characters/students"; // Harry potter Students.
//   const response = await fetch(url1);
//   const studentsData = await response.json();
//   console.log("Students Data Length:- ", studentsData.length);
//   for (let i = 0; i < studentsData.length && i < 6; i++) {
//     console.log(studentsData[i].name);
//   }
// }

// Harry-Potter API
getHarryPotterCharacters();
// Fetch Harry Potter Character's
async function getHarryPotterCharacters() {
  const url = "https://hp-api.onrender.com/api/characters";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    console.log("Character's from Harry Potter:");
    data.slice(0, 6).forEach((element) => {
      console.log(element.name);
    });
    console.log("");
    await getHarryPotterStudentCharacters();
  } catch (error) {
    console.log(error);
    await getHarryPotterStudentCharacters();
  }
}

// Fetch Harry Potter Student Character's
async function getHarryPotterStudentCharacters() {
  const url = "https://hp-api.onrender.com/api/characters/students";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    // console.log(data);
    console.log("Student Character's from Harry Potter:");
    data.slice(0, 6).forEach((element) => {
      console.log(element.name);
    });
    console.log("");
    await getHouses();
  } catch (error) {
    console.log("Error: ", error);
    await getHouses();
  }
}

// Fetch Harry Potter Houses
async function getHouses() {
  const url = "https://hp-api.onrender.com/api/houses";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    await getSpells();
  } catch (error) {
    console.log(error);
    console.log("");
    await getSpells();
  }
}

// Fetch Harry Potter Spells
async function getSpells() {
  const url = "https://hp-api.onrender.com/api/spells";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    console.log("Spells From Harry Potter");
    data.slice(0, 10).forEach((element) => {
      console.log(element.name);
    });
    console.log("");
    await getRickAndMortyCharacter();
  } catch (error) {
    console.log("Error: ", error);
    await getRickAndMortyCharacter();
  }
}

// Fetch Rick and Morty Character's
async function getRickAndMortyCharacter() {
  const url = "https://rickandmortyapi.com/api/character";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(`HTTP error! Status: ${response.status}`);
    }
    console.log("Character's From Rick and Morty");
    const data = await response.json();
    // console.log(data.results);
    data.results.slice(0, 6).forEach((element) => {
      console.log(element.name);
    });
    console.log("");
    await getRickAndMortyLocation();
  } catch (error) {
    console.log("Error: ", error);
    await getRickAndMortyLocation();
  }
}

// Get Rick and Morty Location
async function getRickAndMortyLocation() {
  const url = "https://rickandmortyapi.com/api/location";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: , ${response.status}`);
    }
    const data = await response.json();

    const maxNameLength =
      Math.max(...data.results.map((loc) => loc.name.length)) + 2;
    // console.log(data);
    console.log("Locations from Rick and Morty");
    data.results.slice(0, 9).forEach((element) => {
      const name = element.name.padEnd(maxNameLength);
      const type = element.type;
      console.log(`Location Name : ${name} Location Type: ${type}`);
      //   console.log("Location Name :",element.name," Location Type :", element.type);
    });
    console.log("");
    await getRickAndMortyEpisode();
  } catch (error) {
    console.log(error);
    await getRickAndMortyEpisode();
  }
}

// Get Rick and Morty Episode
async function getRickAndMortyEpisode() {
  const url = "https://rickandmortyapi.com/api/episode";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: , ${response.status}`);
    }
    const data = await response.json();
    console.log("Episodes for Rick and Morty:");
    // console.log(data);

    const nameMaxLength = Math.max(
      ...data.results.map((element) => element.name.length)
    );

    data.results.slice(0, 6).forEach((element) => {
      const name = element.name.padEnd(nameMaxLength);
      const airDate = element.air_date;

      console.log(`Episode Name : ${name} Episode Air Date : ${airDate}`);
    });
  } catch (error) {
    console.log(error);
  }
}
