
function intro()
{
    console.log('Hi');
    console.log('My');
    console.log('Name');
    console.log('Is');
    console.log('Shahid');
}
// intro()

function addTwoNumbers(number1, number2)
{
    console.log(number1 + number2);
}

function add2nos(number1, number2)
{
    result = number1 + number2
    console.log("The result is: ");
    return result
}

// addTwoNumbers(12.31,13.131)
// addTwoNumbers("Hi", 5)
// addTwoNumbers(4,null)

// const res = add2nos(4.5,21)
// console.log(res);

function loginMsg(username = "Anonymous"){ // using this will save in writing extra code
    if(username.length > 0){
    return `Hello, ${username}. Welcome to this page...`
    }
}

console.log(loginMsg("Shahid"))