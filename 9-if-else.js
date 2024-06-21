let user = {
    name: 'sita',
    paidStatus: false,
    hasScholarship:true,
    gender: 'male'
}
function checkGender(){
    if(user.gender=='male' && (user.hasScholarship== true || user.paidStatus == true))
        console.log(` mr.${user.name} can give exam`);
    else{
        console.log(` mrs.${user.name} cannotgive exam`);
        }
}
checkGender()