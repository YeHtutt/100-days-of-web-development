// const job = {
//     title: 'Developer',
//     location: 'New York',
//     salary: 50000,
// }

// console.log(new Date().toISOString());

// const job2 = {
//     title: 'Cook',
//     location: 'Munich',
//     salary: 35000,
// }

class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }

  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`,
    );
  }
}

const developer = new Job("Developer", "New York", 50000);
const cook = new Job("Cook", "Munich", 35000);

// console.log(developer);
// console.log(cook);

// developer.describe();
// cook.describe();



/*********************    Destructuring Objects   ***********************************/
//Array Destructuring
const input = ['Ye Htut', 'Aung'];
const firstName = input[0];
const lastName = input[1];
const [first, last] = input;

console.log(first);
console.log(last);


//Object Desturcturing
const job = { title: 'Developer', location: 'New York', salary: 50000 };
const jobTitle = job.title;
// const location = job.location;

const {title, location} = job;
console.log(title);

const {title: jTitle} = job; //keyname of the title should change to jTitle
console.log(jTitle);

//good example from the bigger Express Lesson - uuid 3rd party package

//From Our Lesson we imported in a simple way
//const uuid = require("uuid");
//restaurant.id = uuid.v4();

//uuid form the npmjs Doc used the Object Destructuring Method
// const {v4: uuidv4} = require('uuid');
// uuidv4();
// uuidv4 is custom name(user given name)