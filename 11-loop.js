let person =[
    {name:'ram',age:10 ,gender: 'male'},
    {name:'shyam',age:13, gender: 'male'},
    {name:'hari',age:21, gender: 'female'},
    {name:'gita',age:20, gender: 'female'}
]
// let gender='mr'
// for(let startingPoint = 0 ; startingPoint<person.length ; startingPoint++){
//     let genderPrefix = 'Mr.'
//     if( person[startingPoint].gender == 'female')
//         genderPrefix = 'Mrs.'
//     else{
//         console.log(`mrs ${person[startingPoint].name}'s age is ${person[startingPoint].age}`);
//     }
// }
// ternary operator
/* for(let startingPoint = 0 ; startingPoint<person.length ; startingPoint++){
    person[startingPoint].gender == 'male' ? console.log(`${gender} ${person[startingPoint].name}'s age is ${person[startingPoint].age}`):
    console.log(`mrs ${person[startingPoint].name}'s age is ${person[startingPoint].age}`);
} */
for (let index = 0 ; index < person.length ; index++){
    let { name , age, gender} = person[index] // object destructuring
    console.log(`${gender=='male' ? 'mr' : 'mrs'} ${name}'s age is ${age} `)
}
function findMultiplication(parameter){
    for(let startFrom=parameter.startFrom; startFrom<= parameter.endAt;startFrom++){
        console.log(`${parameter.number}*${startFrom}=${parameter.number*startFrom}`);
    }
}
findMultiplication({number:10,startFrom:11,endAt:20})