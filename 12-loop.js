//key value same
/* function findCountryCode(countryName){
    return "np"

}
let nepalcode = findCountryCode('Nepal')
console.log({nepalcode: nepalcode}); */
let numbers = [1,2,3,4,5,6]
let doubledNumbers = []
function double(num){
    for ( let i = 0 ; i< numbers.length ; i++){
        doubledNumbers.push(num[i]*2)
    }
}
double(numbers)
console.log(doubledNumbers);

const nepaliNames = ['Aarav', 'Aarya', 'Aasha', 'Anisha']
let users = []
function fakeDatabase(){
    for ( let i = 0 ; i< nepaliNames.length ; i++){
            users.push({name:nepaliNames[i],
            email:`${nepaliNames[i]}@gmail.com`,
            password:`${nepaliNames[i].toLowerCase()}${i}`})
    }
}
fakeDatabase()
console.log(users)
//rest operator
function sum(num1,num2,...rest){
    console.log({rest});

}
sum(100,200,3,4,5,6,7,8)

