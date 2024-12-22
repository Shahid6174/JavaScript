// Immediately Invoked Function Expressions IIFE 

// function conn() {
//     console.log("Database Connected");
// }
// conn()

// Due to global scope pollution we use IIFE
(function conn() { // named IIFE
    console.log("Database Connected");
})(); // use semi-colon for properly ending it

((dbname) => { // unnamed IIFE
    console.log(`Database Connected Successfully to ${dbname}`);
})("SQLite");

