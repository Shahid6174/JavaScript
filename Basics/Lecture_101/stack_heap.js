// Stack Memory ---> Primitive -- we get a copy of data
// Heap Memory ---> Non Primitive -- we get original data

let name1 = "Shahid"
let name2 = name1
name2 = "Md Shahid"
console.log(name1);
console.log(typeof name2);

let obj1 = {
    name: "Shahid",
    age: 25
}

let obj2 = obj1
obj2.age = 21 // makes changes in the original data
console.log(obj1);
console.log(obj2);