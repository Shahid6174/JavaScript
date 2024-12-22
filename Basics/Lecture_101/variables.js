const accId = 144553 //cannot further change
let accEmail = "shahid@gmail.com"
var accPassword = "1234"
accountCity = "Bangalore" //default way
let accState
// accId = 1.....will throw an error

//we don't use var much because of scope issues(block and functional)... --> now we use let

/*
Don't use var
*/

accEmail = "mdshahid@gmail.com"
accPassword = "122"
accountCity = "Jaipur"
console.log(accId);

console.table([accId, accEmail, accPassword, accountCity, accState]);

