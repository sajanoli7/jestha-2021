let user = {
    name: 'sita',
    paidStatus: false,
    hasScholarship:true,
    gender: 'male'
}
let genderPrefix='Mr.'
if (user.gender == 'female'){
    genderPrefix= 'Mrs.'
}
if (user.paidStatus){
    console.log('${genderPrefix}');
}