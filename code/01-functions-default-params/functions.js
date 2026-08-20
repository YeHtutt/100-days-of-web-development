//first parameter(greetingPrefix) = none optional; second parameter(userName) = optional
function greetUser(greetingPrefix, userName = 'user') { //default value for parameter(userName)
    console.log(greetingPrefix + ' ' + userName + '!' );
}

greetUser('Hi', 'Ye Htut');
greetUser('Hello');