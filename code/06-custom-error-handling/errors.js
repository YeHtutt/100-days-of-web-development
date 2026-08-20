const fs = require("fs");

// function readFile() {
//   try {
//     const fileData = fs.readFileSync("data.json");
//   } catch {
//     console.log("An error occured!");
//   }
//   console.log("Hi there!");
// }

function readFile() {
  try {
    const fileData = fs.readFileSync("data.json");
  } catch (error) {
    console.log("An error occured! Error Message: ", error.message);
  }
  console.log("Hi there!");
}

readFile();
