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
        {
            name:'saksham',
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
        }
    ]
    users[0].address.permanent.District='kathmandu';
    users[0].address.temporary.wardNo=10;
    users[0].address.temporary.toleName='hero'
    users[0].address.temporary.toleName='hero'
function displayUserInfo(user){
    console.log(`name: ${user.name}, address: ${user.address.temporary.District}`);
}
displayUserInfo(users[0])
displayUserInfo(users[1])
// let genders=['male','female','others']
// genders.length
// Math.random()// 0 to 1
// Math.floor //1.2 = 1
// TOD0: print random gender form above gender
function randomGender(){
    let genders=['male','female','others']
    return genders[Math.floor(Math.random()*genders.length)]
}
randomGender()
function randomReligion(){
    let religions=['hindu','buddhist','christian','muslim']
    return religions[Math.floor(Math.random()*religions.length)]
}
function randomAge(){
    return Math.floor(Math.random()*100)
}
function allIndex(random)   
    {  
users[random].religion=randomReligion()
users[random].gender=randomGender()
users[random].age=randomAge()
    }
allIndex(0)
allIndex(1)
allIndex(2)
console.log(users);
