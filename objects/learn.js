var person = {
    name: "Joe Dirt",
    state: "Alabama",
    haircut: "Mullet",
    age: 32
}

var person2 = {
    name: "Maui",
    state: "Hawaii",
    haircut: "Long",
    age: 752
}

function sayHello(greetedPerson){
    console.log("Hello, " + greetedPerson.name + ". You are from " + greetedPerson.state + ". I like your " + greetedPerson.haircut + ".");
    console.log("You are " + greetedPerson.age + " years old.");
}

sayHello(person);
sayHello(person2);