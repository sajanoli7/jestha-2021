// Ternary operator
let user = {
    name: 'sita',
    paidStatus: true,
    hasScholarship:false,
    gender: 'male',
    hasMetAttendence:false,
    genders:'others',
    email: 'sita@sita.com',
    password: 'password'
}
if( ( user.paidStatus || user.hasScholarship ) && user.hasMetAttendence ){
    console.log(`${user.name} can give exam`);
}
else{
    console.log(`${user.name} cannot give exam`);
}
function login ( email,password ){
    if(user.email==email && user.password==password){
        console.log('you can login');
    }
    else{
        console.log('you cannot login');
    }
}
login('sita@sita.com','password')
