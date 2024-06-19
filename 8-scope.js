// global variable and block scope variable
let name = 'ram'
let age = 12
let number = 100
function doSomething() {
    let number = 1111 //since we used let keyword,this is now a block scope variable only
    age =33 // since we haven use let keyword. it updates the above global varaible
    console.log('number inside', number);
    console.log('age inside', age);
}
doSomething()
console.log('number outside', number);
console.log("age outside", age);
const input = 12
function double(input) {
    // block scope variable
    let output= input *2
    return output
    }
console.log(double(13))
console.log(input);
// console.log(output)
a