let  colour={
    name:'red',
    hex:'#ff0000',
    rgbValue:'rgb(255,0,0)',
    rgbValue:
    {red:255,
    green:0,
    blue:2  
    }
}
colour.rgbValue.blue=31
console.log(colour.rgbValue.blue)
let users= [
    {
        name:'sameer',
        address:{
            temporary:{
                address:'kalimati',
                wardNo:26,
                District:'kathmandu'
            },
            permanent:{
                address:'kalanki',
                wardNo:31,
                District:'kathmanduuuuu'
            },
            
        }
    },
        {
            name:'reason',
            address:{
                temporary:{
                    address:'nagdhunga',
                    wardNo:13,
                    District:'lalitpur'
                },
                permanent:{
                    address:'kalanki',
                    wardNo:30,
                    toleName:'reasonMandi',
                    District:'kathmandu'}
            }
        },
    ]
    users[0].address.permanent.District='kathmandu';
    users[0].address.temporary.wardNo=10;
    users[0].address.temporary.toleName='hero'
    users[0].address.temporary.toleName='hero'

console.log(`${users[0].name} from ${users[0].address.temporary.address} of wardNo ${users[0].address.temporary.wardNo}`);                                                                               
console.log(users[1].name,'from',users[1].address.temporary.address,'of wardNo',users[1].address.temporary.wardNo);
// templeate literal/string literal
console.log(" 1 + 2 = 3\n","4 + 5 = 9\n","10 + 20 = 30\n","40 + 30 =70")
let firstNumber =10
let secondNumber = 2
let result = firstNumber + secondNumber
console.log(firstNumber + " + " + secondNumber + " = " + result);
let thirdNumber =10
let fourthNumber = 4
let secondresult = thirdNumber + fourthNumber
console.log(thirdNumber + " + " + fourthNumber + " = " + secondresult);
console.log("the sum of "+ firstNumber + " and " + secondNumber + " is " + result);

let var1=`            ram`
console.log(`my name is ${var1}`);
