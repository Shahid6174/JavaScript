// const add12 = function add2(num1) {
//     return num1 + 2;
// }
// console.log(add12(3));

const user = {
    name: 'John',
    price: 1000,
    
    welcomeMsg: function() {
        console.log(`Hello, ${this.name}. Welcome to website`); // this is used to refer to current context
        console.log(this); //will print ==> { name: 'John', price: 1000, welcomeMsg: [Function: welcomeMsg] }
    }
}

// user.welcomeMsg()
// user.name = "Shahid" // change of context
// user.welcomeMsg() // { name: 'Shahid', price: 1000, welcomeMsg: [Function: welcomeMsg] }

// console.log(this); // will print {} 

// window object is a global object in browser

// function coffee() {
//     console.log(this); // this can't refer to any context in a function
// }

// coffee()

// const chai = () => {
//     let username = "Shahid"
//     console.log(this.username); 
// }

// chai()

// Arrow function ......   () => {}


const addTwo = (num1,num2) => {
    return num1+num2
}
const addThree = (num1,num2,num3) => (num1+num2+num3) // implicit-return function // wrapping in parenthesis

const setName = (username) => ({username:username})

console.log(addTwo(3,2));
console.log(addThree(3,7,9));
console.log(setName("Shahid"));

// const myArr = [1,2,3,4]
// myArr.forEach(() => {})