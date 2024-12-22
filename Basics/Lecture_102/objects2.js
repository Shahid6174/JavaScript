// const tinderUser = new Object(); --> singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Shahid"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regUser = {
    email: "shahid@google.com",
    fullname: {
        firstname: "Mohammed",
        lastname: "Shahid"
    }
}

console.log(regUser.fullname?.firstname); // ? is used coz if there is no value called fullname then it will give undefined rather than throwing error

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2} // It will cause same error as in array
// const obj3 =  Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        name:"Shahid",
        age: 25
    },
    {
        name:"Lionel Messi",
        age: 37
    },
    {
        name:"Cristiano Ronaldo",
        age: 38
    }
]

console.log(users);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));