// function sumUp(...numbers) { //The Spread Operator use for unpack arrays, objects or other iterable values.
//     let result = 0;

//     for(const number of numbers) {
//         result += number;
//     }

//     return result;
// }

// const inputNumbers = [1, 5, 10, 11, 20, 31];

// console.log(sumUp(...inputNumbers)); //JS expected for the input parameter as Spread Operator 


//Functions are Object
function greet(name = "user") {
    return `Hallo ${name}`;
}

greet.language = "English"; //hier the property language is used as - a normal Object!

console.log(greet("Max"));
console.log(greet.language);

console.log(typeof greet()); //It shows different than an Object but in the line below we can see the real type of the function

console.log(greet instanceof Object); //greet function is like an Object instance ('true')

/**
 * we can see at the nodeJS Express App the requirement of express Object by calling it as a function
 * 
 * const express = require("express");
 * const app = express();
 */