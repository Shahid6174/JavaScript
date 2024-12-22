// if
const isUserLoggedIn = true
if(isUserLoggedIn){
    console.log("This will be printed");
}

// >, <, >=, <=, ==, !=, ===, !==

// if-else
let x=5
if(x==5) {
    console.log("This will be printed if x is equal to 5");
}
else{
    console.log("This will not be printed if it ain't");
}

// if-else if-else
const a = 1
const b = 10
if(a == b){
    console.log("It is equal");
}
else if(a<b){
    console.log("B is greater");
}
else {
    console.log("A is greater");
}

// &&, ||, !
// in, instanceOf 
// ternary operator val = (a>b)?(a):b
// falsy values --> false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values --> "0", 'false', " ", [], {}, function(){}

// Nullish Coalescing operator (??): null undefined

let val1;
val1 = 5??10 // will print 5
val2 = null??11 // will print 10
val3 = undefined??12 // will print 10
let val4 = null??14??90
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);