function one()
{
    const name = "Shahid"

    function two()
    {
        const age = 22
        console.log(age);
    }
    // console.log(age);
    two()
}

// one()


console.log(addOne(3));
function addOne(num1){
    return num1 + 1;
}

// this is an expression and cannot be accesses b4 declaration --> Hoisting
const add2 = function(num1) {    
    return num1 + 2;
}

console.log(add2(4));

