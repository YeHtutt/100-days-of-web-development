//Spread Operator pulls values ( or key-value pairs ) out of arrays and objects

function sumUp(...numbers) { //The Spread Operator use for unpack arrays, objects or other iterable values.
    let result = 0;

    for(const number of numbers) {
        result += number;
    }

    return result;
}

const inputNumbers = [1, 5, 10, 11, 20, 31];

console.log(sumUp(...inputNumbers)); //JS expected for the input parameter as Spread Operator 

console.log(sumUp);