// var c = 300 // global scope

let a = 1
if(true){  // local scope
    let a = 10
    const b = 20
    console.log(a);
    // var c = 30
}

console.log(a);
// console.log(b);
// console.log(c);