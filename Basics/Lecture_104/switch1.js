// switch(key){
//     case value:
//         break

//     default:break
// }

let op1 = 5;
let op2 = 50;
let operator = '+';

let result;

switch(operator) {
    case '+':
        result = op1 + op2;
        break;
    case '-':
        result = op1 - op2;
        break;
    case '*':
        result = op1 * op2;
        break;
    case '/':
        result = op1 / op2;
        break;
    case '^':
        result = op1 ** op2;  
        break;
    default:
        result = 'Invalid operator';
}
console.log(result); 
