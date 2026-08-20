// Primitive values: numbers, strings, booleans & more (undefined)
// Reference values: Objects, Arrays etc.
const hobbies = ['Sports', 'Cooking']; // a pointer to the array is stored (showing to the address of the memeroy)

const age = 32; // the value itself is stored 

hobbies.push('Reading'); // the address of the array doesn't change

//hobbies = ['Coding', 'Sleeping']; //not allowed! new address is stored

console.log(hobbies);



// Example-1 with side effect -> unnecessary changing the value of person Object 
// const person = { age: 32 };

// function getAdultYears(p) {
//     p.age = p.age - 18;
//     return p.age;
// }

// console.log(getAdultYears(person));
// console.log(person); //person Object also change because we assign directly to

// Example-2 a good option with not setting a new value. Here the original person object didn't change!
// const person = { age: 32 };

// function getAdultYears(p) {
//     // p.age = p.age - 18;
//     // return p.age;
//     return p.age -18;
// }

// console.log(getAdultYears(person));
// console.log(person);


//Example-3 a better option with the copy object (so call spread-operator {...object-copy})
const person = { age: 32 };

function getAdultYears(p) {
    p.age = p.age - 18;
    return p.age;
    // return p.age -18;
}

console.log(getAdultYears({...person}));
console.log(person);