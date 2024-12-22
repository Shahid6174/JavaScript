// let age = "19abc" // NaN --> Not a Number
// let age = undefined // NaN --> Not a Number
let age = true// will get 1

console.log(typeof age);

let numberInAge = Number(age)
console.log(numberInAge);
console.log(typeof NaN); // type of NaN is number

let isHungry = "" // empty string gives false same as 0 for number
let isHungryBool = Boolean(isHungry)
console.log(isHungryBool); // true


let num = 55
let numStr = String(num)
console.log(numStr, typeof numStr);

