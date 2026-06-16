let age = 34;
let userName = "Ye Htut";
let hobbies = ["Sports", "Reading", "Cooking"];
let job = {
  title: "Developer",
  place: "London",
  salary: 50000,
};

let totalAdultYears;

function calculateAdultYears(userAge) {
  let result;
  result = userAge - 18;
  return result;
}


totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);


age = 45;
totalAdultYears = calculateAdultYears(age);

console.log(totalAdultYears);

let person = {
  name: 'Ye Htut', //Property
  greet() {
     console.log('Hello!');
  }
}

person.greet();