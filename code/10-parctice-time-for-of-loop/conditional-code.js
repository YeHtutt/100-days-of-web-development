const myName = 'Ye Htut';

if(myName === 'Ye Htut') {
    console.log('Hello');
}

let isLoggedIn = true;

if(!isLoggedIn) {
    console.log('User is NOT logged in!');
}

// const enteredUserName = 'Ye Htut'; 

// if (enteredUserName.length > 0) {
//     console.log('Input is valid!');
// }

const enteredUserName = ''; //0  "emptystring = false"

if (enteredUserName) { //condition true
    console.log('Input is valid!'); //output will fail
}