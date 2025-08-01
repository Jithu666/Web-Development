fetchUserData();
let url = "https://jsonplaceholder.typicode.com/todos/";

// Fetch Api using .then
function fetchUserData() {
  setTimeout(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data from the given url endpoint.");
        }
        return response.json();
      })
      .then((data) => {
        // To print the entire data object.
        // console.log("Data: ", data);
        // response object returns an Array -> To print every data object individually, we access it through its index values.
        // for (let i = 0; i < 6; i++) {
        //   console.log("Title: ", data[i].title);
        // }
        // We can also use an forEach loop in this case to print all the data objects from the Array.
        data.forEach((element) => {
          console.log(`Tittle: ${element.title}`);
        });
      })
      .catch((error) => console.log("Error Message: ", error));
  }, 2000);
}
