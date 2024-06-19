function double(a){
    return 2*a
}
// arrow function having one line of code and only one parameter to pass
let doubleA = a => 2*a
console.log(double(2));
console.log(doubleA(3));
// arrow function having two parameter but only one line of code
let doubleB = (c,d) => c+d
console.log(doubleB(3,4));
// arrow function having multiple line of code
let doubleC  = (c,d) => {
    c=c+c
    d=d+d
    return c+d
}
console.log(doubleC(3,4));
//anonymous function
// arrow funcion having no parameter
let doubleD = () => 3
console.log(doubleD());

