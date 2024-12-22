let marvel = ["Ironman", "Capt America", "Thor", "Hulk"]
let dc = ["Superman", "Batman", "Wonder Woman", "Aquaman", "Flash", "Cyborg"]

// marvel.push(dc)
// console.log(marvel); // will create a 2d array

// let newOne = marvel.concat(dc) // will add perfectly
// console.log(newOne);

const all_heroes = [...marvel, ...dc] // new style
console.log(all_heroes);

const myArr = [1, 2, 3, [4, 5, 6], [8, [9]], 10]
const newArr = myArr.flat(Infinity)
console.log(newArr);

console.log(Array.isArray("Shahid")); 
console.log(Array.from("Shahid")); // Array from string

console.log(Array.from({name: "Shahid"})); // Array from string --> interesting case --> empty list

let score0 = 10
let score1 = 100
let score2 = 1000
let score3 = 10000

console.log(Array.of(score0,score1,score2,score3));
