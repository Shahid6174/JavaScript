// singleton
// Object.create

// object literals


const mysym = Symbol("key-1")

const JsUser = {
    name: "Shahid",
    age: 20,
    [mysym]: "key-2",
    "full name": "Mohammed Shahid", // not accessible using dot operator
    location: "Bangalore",
    email: "shahid@gmail.com",
    isLoggedIn: true,
    daysAvailable: ['Mon', 'Tue', 'Fri']
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym], typeof JsUser[mysym]);

JsUser.email = "shahid@yahoo.com"
// Object.freeze(JsUser)
JsUser.email = "shahid@linkedin.com"

// console.log(JsUser);

// {
//     name: 'Shahid',
//     age: 20,
//     'full name': 'Mohammed Shahid',
//     location: 'Bangalore',
//     email: 'shahid@yahoo.com',
//     isLoggedIn: true,
//     daysAvailable: [ 'Mon', 'Tue', 'Fri' ],
//     [Symbol(key-1)]: 'key-2'
//  }

JsUser.greeting = function(){
        console.log(`Hello people, I am ${this.name}`);
}
JsUser.greetingTwo = function(){
        console.log(`Hello people, I am ${this["full name"]}`);
}

JsUser.greeting();
JsUser.greetingTwo();