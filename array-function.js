// asynchronous
/* 
promises in javascript
map
rest
unshift()
shift()
push
pop


 */
let users = [
    {name:'ram', age:10},
    {name: 'hari', age:12},
    {name: 'shyam', age:13},
    {name: 'sita', age:21},
    {name: 'rita', age:23}
]
let childrens = []
let adults = []
for (let i = 0 ; i< users.length ; i++){
    console.log(`${users[i]} =  ${i}`);
}
/* users.forEach((element) => {
    console.log(` ${element.name}'s age: ${element.age}`);

}) */
users.forEach((element) => {
    if(element.age<=18){
        childrens.push(element.age)
    }
    else{
        adults.push(element.age)
    }

})
console.log(childrens);
console.log(adults);
let childs = users.filter((element)=>{
    if (element.age<=18){
        return true
    }
})
let otherAdult = users.filter((element)=>{
    if (element.age>18){
        return true
    }
})
console.log(childs);
console.log(otherAdult);
// map function
 