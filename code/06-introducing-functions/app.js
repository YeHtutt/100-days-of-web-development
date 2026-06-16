let age = 34;
let userName = "Ye Htut";
let hobbies = ["Sports", "Reading", "Cooking"];
let job = {
  title: "Developer",
  place: "London",
  salary: 50000,
};

let adultYears;

function calculateAdultYears() {
  adultYears = age - 18;
}

calculateAdultYears();
alert(adultYears);

age = 45;
calculateAdultYears();

alert(adultYears);
