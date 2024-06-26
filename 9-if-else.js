let user =[ {
        name: 'sita',
        paidStatus: false,
        hasScholarship:true,
        gender: 'female'
    },
    {
        name:'ram',
        gender:'male'

    },
    {
        name:'laxman',
        gender:'male'
    }
]
let genderPrefix='Mr.'
if (user.gender == 'female'){
    genderPrefix= 'Mrs.'
}
if (user.paidStatus){
    console.log('${genderPrefix}');
}