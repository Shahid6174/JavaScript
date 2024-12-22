const name = "Shahid"
const repoCount = 34

// console.log(name + repoCount); very basic

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Dpool-6174") // will convert it to key-value pairs
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('7'));

const newOne = console.log(gameName.substring(0,5))

const anotherOne = console.log(gameName.slice(-9,3));

const newString = "    shahid      "
console.log(newString);
console.log(newString.trim());


const url = "www.github.com/Shahid6174"

console.log(url.replace("www.github.com", ""))

console.log(url.includes("Shah"));

console.log(gameName.split('-')) //splits into array based on separator

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String