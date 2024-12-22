const date = new Date()
// console.log(typeof date); //object type
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toLocaleString());

const myDate = new Date(2004,2,18,14,55) // yyyy - mm - dd - hrs - min - sec
// console.log(myDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // this type is used in booking 
// console.log(myDate.getTime());
// console.log(Math.floor(myTimeStamp/1000)); // this type is used in booking 

let newDate = new Date()
console.log(newDate.getUTCDate());

obj1 = newDate.toLocaleString('default',{
    weekday: "long",
    month: "long"
})

console.log(obj1);
