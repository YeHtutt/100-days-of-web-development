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
  return userAge - 18;
}


totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);


age = 45;
totalAdultYears = calculateAdultYears(age);

alert(totalAdultYears);