// let's take an example of shopping cart

function inCartPrice(...num1){ 
    // ...rest operator also known as spread operator
    i = 0
    sum = 0
    while (i < num1.length)
    {
        sum += num1[i]
        i++
    }
    return sum
}

// val1, val2, ...num1

console.log(inCartPrice(200,122,11,100));

const user =  {
    username: "Shahid",
    price: 200
}

function handleObj(anyObj) {
    return `Username: ${anyObj.username} and Price: ${anyObj.price}`
}

const newArr = [2,2,3,4,5]

function returnSecElem(arr) {
    return arr[1]
}
console.log(returnSecElem(newArr));

