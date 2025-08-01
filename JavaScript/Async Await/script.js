const fillWater = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filledWater = true;
      if (filledWater) {
        resolve("Water-Filled!");
      } else {
        reject("You did not fill water");
      }
    }, 1000);
  });
};

const bookTickets = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ticketBooked = false;
      if (ticketBooked) {
        resolve("Tickets Booked");
      } else {
        reject("You Failed to book the tickets on time.");
      }
    }, 2000);
  });
};

const informInAdvance = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const informed = true;
      if (informed) {
        resolve("Leave Approved");
      } else {
        reject("Leave Rejected");
      }
    }, 3000);
  });
};

// fillWater()
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// bookTickets()
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// informInAdvance()
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// fillWater()
//   .then((response) => {
//     console.log(response);
//     return bookTickets();
//   })
//   .then((response) => {
//     console.log(response);
//     return informInAdvance();
//   })
//   .then((response) => {
//     console.log(response);
//     console.log("You finished all the chores");
//   })
//   .catch((error) => console.log(error));

// const getSeconds = () => {
//   let seconds = 0;
//   const clockElement = document.getElementById("clock");

//   const intervalId = setInterval(() => {
//     seconds++;
//     clockElement.textContent = `Seconds: ${seconds}`;

//     if (seconds >= 3) {
//       clearInterval(intervalId);
//     }
//   }, 1000);
// };

async function doChores() {
  try {
    const FillWater = await fillWater();
    console.log(FillWater);

    const BookTicket = await bookTickets();
    console.log(BookTicket);

    const Inform = await informInAdvance();
    console.log(Inform);
  } catch (error) {
    console.log(error);
  }
}

// doChores();

// Async await

// Fetch Api's
// Example 1:
let url = "https://jsonplaceholder.typicode.com/users/";
// let url1 = "https://dummyjson.com/test";
// let url2 = "https://dummyjson.com/ip";

// async function getUserInfo() {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     // For URL
//     // data.forEach((element) => {
//     //   console.log(element.id);
//     //   console.log(element.name);
//     //   console.log(element.address);
//     //   console.log(element.company.bs);
//     // });

//     data.forEach((user) => {
//       console.log(
//         `Id: ${user.id}, Name: ${user.name}, UserName: ${user.username}, E-Mail: ${user.email}`
//       );
//     });

//     // For url1
//     // console.log(data);

//     // For Url2
//     // console.log(data.ip);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getUserInfo();
