function greetUser(greetingPrefix, userName = 'user') { //default value for parameter(userName)
    // console.log(greetingPrefix + ' ' + userName + '!' );

    //With template literals
    console.log(`${greetingPrefix} ${userName}!`);
}

greetUser('Hi', 'Ye Htut');
greetUser('Hello');



function sumUp(...numbers) { //The Spread Operator use for unpack arrays, objects or other iterable values.
    let result = 0;

    for(const number of numbers) {
        result += number;
    }

    return result;
}

const inputNumbers = [1, 5, 10, 11, 20, 31];

console.log(sumUp(...inputNumbers)); //JS expected for the input parameter as Spread Operator 

