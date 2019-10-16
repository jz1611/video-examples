// Create a function declaration that returns 2 plus 2

function returnFour() {
    return 2 + 2;
}

let four = returnFour();
four;

// Create a function expression that returns the string "Hello"

let greeting = function() {
    return "Hello";
}

let message = greeting();
message;

//Create an arrow function that returns the boolean true
// Is there a shorter syntax?
let returnTrue = () => {
    return true;
}

let result = returnTrue();
result;

let returnTrue = () => true;    // Shorter syntax!