getCharacters(getStudents);
// Callback to fetch Characters from Harry-potter Api
function getCharacters(callback) {
  setTimeout(() => {
    const url = "https://hp-api.onrender.com/api/characters";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("First 6 Harry Potter's Character's:");
        for (let i = 0; i < 6; i++) {
          console.log(data[i].name);
        }
        callback(getHouses);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, 2000);
}

function getStudents(callback1) {
  // Callback to fetch Student Characters from Harry-potter Api
  const url = "https://hp-api.onrender.com/api/characters/students";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("First 6 Harry Potter's Student Character's:");
      const firstSix = data.slice(0, 6);
      firstSix.forEach((element) => {
        console.log(element.name);
      });
      callback1(getRickAndMortyCharacters);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

function getHouses(callback2) {
  const url = "https://hp-api.onrender.com/api/characters/houses";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP Error " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      //   const firstSix = data.slice(0, 6);
      //   firstSix.forEach((element) => {
      //     console.log(element.name);
      //   });
      console.log(data);
      callback2();
    })
    .catch((error) => {
      console.log("Error: ", error);
      callback2();
    });
}

function getRickAndMortyCharacters() {
  const url = "https://rickandmortyapi.com/api/character";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const firstSix = data.results.slice(0, 6);
      console.log("Rick and Morty Character's:");
      //   console.log(data);
      firstSix.forEach((element) => {
        console.log(element.name);
      });
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
