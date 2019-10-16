// What is a function?
// How to define a function? Declaration vs expression vs arrow?
// How to invoke a function?
// What is a return statement?

// Declaration
function createVar(){
    let myName = 'Joe';
}

// Expression
let createVar2 = function(){
    let myName = 'Joe';
}

// Arrow
let createVar3 = () => {
    let myName = 'Joe';
}

function returnName() {
    return 'Joe';
}

let result = returnName();
result;