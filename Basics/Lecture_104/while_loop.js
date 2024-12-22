// while (condition) {

// }

let i = 0
let stars = "*"
blanks = ""
while(i<6)
{
    blanks += " "
    i++
}
i = 0
while(i<6){
    console.log(blanks + stars);
    stars += "*"
    blanks = blanks.substr(0,blanks.length-1)
    i++
}
