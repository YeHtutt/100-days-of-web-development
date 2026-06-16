let age = 34;
let userName = "Ye Htut";
let hobbies = ["Sports", "Reading", "Cooking"];
let job = {
  title: "Developer",
  place: "London",
  salary: 50000,
};

let totalAdultYears;

function calculateAdultYears() {
  return age - 18;
}


totalAdultYears = calculateAdultYears();
alert(totalAdultYears);


age = 45;
totalAdultYears = calculateAdultYears();

alert(totalAdultYears);