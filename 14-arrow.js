const double = (input) => {
    return input * 2
}
console.log(double(400));
let diff = (input1,input2) => {
   return input1-input2}
console.log(diff(5,3));
// callback function is an function passed as an argument to another function
const showPopup = () => {
    console.log("show popup")
}

setTimeout(showPopup,2000)
setTimeout(()=>{
    console.log("do something")
},2000)