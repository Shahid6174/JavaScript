// JS is dynamically typed language(datatype of value not defined like in C/JAVA ==> int a = 3)
// Type checking takes place during run-time

// JS is also weakly typed language -- allows ptrs to be type converted easily

// Classification based on how they are called

// Primitive -- called-by-value

// Total 7 types

// String
// Boolean
// Number
// BigInt
// Null
// Symbols --> unique values
// Undefined

// Non-primitive -- called-by-reference

// Array
// Objects
// Functions

const id = Symbol('123')
const anotherId = Symbol('123')

if(id==anotherId)
    console.log("Yupp");
else
    console.log("Nope");

//Arrays, Objects, Functions

const villains = ["DrDoom", "Thanos", "Hela"]
console.log(villains);

let obj = {
    name: "Shahid",
    age: 44,
    occupation: "Software Engineer",
}

const myFunc = function(){
    console.log("Hello World");
}

let bigNum = 1213434341311434134n
console.log(typeof bigNum);
console.log(typeof myFunc); // function object