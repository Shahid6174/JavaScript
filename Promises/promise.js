const promiseOne = new Promise(function(resolve, reject){
    //do an async tasks -- db calls -- transactions, cryptography, networking etc....
    setTimeout(function(){
        console.log("async task is complete");
        resolve()
    }, 1000)
})


// then -- resolve
promiseOne.then(function(){
    console.log("Promise resolved/consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Task Two resolved");
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({username: "Shahid", email: "mdshahid.mds25@gmail.com"})
    }, 1000)
})

//chaining

promiseThree.then(function(user){
    return user.username;
}).then((name) => {
    console.log(name);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Shahid", password: "1234"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})


promiseFour.then(function(user){
    console.log(user);
}).catch(function(err){
    console.log(err);
}).finally(() => {
    console.log("Promise is either resolved/rejected!!!");
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "JAVASCRIPT", password: "1234"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumedPromiseFive() {
    // const response = await promiseFive
    // console.log(response);
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumedPromiseFive()

// async function getAllUsers() {
//     try {      
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }


// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).then((data) =>{
    console.log(data);
}).catch((error) => {
    console.log("Error");
})

