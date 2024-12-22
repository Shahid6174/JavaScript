const myNums = [1,2,3,4,5,6,7,8,9]

// const newNums = myNums.map((num)=>num+10)
// console.log(newNums);

// const newer = []
// myNums.forEach((item) => newer.push(item+10))
// console.log(newer);

const newNums = myNums.map((num)=>num*10).map((num)=>(num+=5)).filter((num)=>(num>50))
console.log(newNums);


// reduce method --> acc and curval

const arr1 = [1,2,3,4]
const myTotal = arr1.reduce(function (acc,curval) {
    console.log(`acc:${acc} and curval:${curval}`);
    return acc + curval
}, 0)
// const myTotal = arr1.reduce((acc,curval) => (acc + curval),0)    
console.log(myTotal);


const flavors = [
    {
        'name':'strawberry',
        'price':100
    },
    {
        'name':'coffee',
        'price':120
    },
    {
        'name':'vanilla',
        'price':140
    }
]
const totalPrice = flavors.map((item)=>item.price).reduce((acc,curval)=>(acc+curval),0)
console.log(totalPrice);
