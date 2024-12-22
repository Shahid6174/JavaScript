// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

// for(const num of arr){
//     console.log(num);
// }

// const greeting = "Hello Welcome!"
// for(const greet of greeting){
//     if(greet == ' ')
//         continue
//     console.log(`Each char is ${greet}`);
// }

// Maps
const map = new Map()
map.set('KA','Karnataka')
map.set('TN','Tamil Nadu')
map.set('AP','Andhra Pradesh')
map.set('KA','Karnataka')
// console.log(map);

// for(const [key,val] of map)
// {
//     console.log(key + " and " + val);
// }

// const myObj = {
//     'game1': 'NFS',
//     'game2': 'Spider-Man'
// }

// for(const [key,val] of myObj){ //objects are not iteratable
//     console.log(key + " and " + val);
// }


// for-in loop

const myObj = {
    'js':'javascript',
    'py':'python',
    'java':'java'
}

for(const key in myObj){
    // console.log(key, myObj[key]);
}

// for-of loop doesn't print values in objects
// for-in loop doesn't print values in arrays
let arr1 = ['Hi','Hello','Hola']
for(const key in arr1){
    // console.log(arr1[key]);
}


// for-each 
const tech = ['Accenture','TCS','Wipro','Infosys']
tech.forEach( (val) => {
    // console.log(val);
})

//Another way of doing it
function printEach(val) {
    console.log(val);
}

tech.forEach(printEach)

const flavors = [
    {
        'name':'strawberry',
        'color':'pink'
    },
    {
        'name':'coffee',
        'color':'brown'
    },
    {
        'name':'vanilla',
        'color':'white'
    }
]

flavors.forEach((item)=>{
    console.log(item.name,"has",item.color.toLocaleUpperCase(),"color");
})