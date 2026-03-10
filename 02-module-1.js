// every file in nodeJS treated as modules (commonJS) (by default)

// module is encapsulated code (only share minimum)
 
const me =  "Saswata Das"
const myFriend = "Bikram"

const sayHi = (name) =>{
    console.log(`Hello ${name}, welcome back`);
}

// exporting 
module.exports = {
    me,
    myFriend,
    sayHi
}