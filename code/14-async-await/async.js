const fs = require("fs/promises");

//we use "async" before function for top level JS Asynchronous concept
async function readFile() {
  let fileData;

  try {
    //Very important! use "await" by reading the file to get reading process done
    fileData = await fs.readFile('data.txt');
  } catch(error) {
    console.log(error);
  }

  console.log('File parsing done!');
  console.log(fileData.toString());
  // return anotherAsyncOperation
  console.log("Hi there!");
}

readFile();