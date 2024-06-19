console.log('hello')
// data types
// string
// null 
// undefineed
// boolean
let fruits=['apple','banana','chimp','dragonfruit']
console.log(fruits)
let evenNumbers=[2, 4, 6, 8, 10,'hello']
console.log(evenNumbers);
console.log(evenNumbers[5])
fruits.shift() //to remove the first elements in an array
fruits.pop()  //to remove the last elements in an array
console.log(fruits)
fruits[3]='monkey'
console.log(fruits)//array should contain only similar element although it's right to contain disimilar elements in javascript
evenNumbers[5]=12
console.log(evenNumbers);
let user1='ram'
let user2='sam'
let user3='lam'
let users=[user1,user2,user3]//this is poor techinque instead assign name
let courses=['science','math','physics','nepali']
console.log(courses);
courses[3]='nep'
console.log(courses[3])
console.log(courses.length)
courses[100]='mernstack'
console.log(courses);
let people=['ram','sita','gita']
people[0]=people[0]+' phonenumber=981234332'
people[1]=people[1]+' phonenumber=93432423432'
people[2]=people[2]+' phonenumber=94324243234'
console.log(people)
people.push('hari phonenumber=981232231')
console.log(people);