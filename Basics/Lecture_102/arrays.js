
const arr = [0,1,2,3,4,true,"Shahid"]
// console.log(arr);
// console.log(arr[6]);

// shallow copy -- copy who share the same reference point ==> changes in original array as well
// shallow copy -- copy who do not share the same reference point ==> will not change the og array

const myArr = new Array(1,2,33,4)
// console.log(myArr.length);
// myArr.push(40)
// // console.log(myArr);
// myArr.push(400)
// myArr.push(4000)
// console.log(myArr);
// console.log("\n");
// myArr.pop()
// console.log(myArr);
// console.log("\n");
// myArr.unshift(1000) // inserts element from forward
// console.log(myArr);
// console.log("\n");
// myArr.shift() // deletes forward element
// console.log(myArr);
// console.log("\n");
// console.log(myArr.includes(8));

const newArr = myArr.join()

// console.log(myArr); // 
// console.log(newArr); // converts to equivalent string


// Slice and Splice

console.log("First one: ", myArr);
const sliced = myArr.slice(1,3)
console.log("Sliced " ,sliced);
console.log("First one after slice: ", myArr);
console.log("Second one: ", myArr);
const spliced = myArr.splice(1,3)
console.log("Spliced " ,spliced); //will include the end index as well
console.log("Second one after splice: ", myArr); //will make changes to the original array as well






