//________-------Datatypes--------_________

// Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol
// BigInt
// const score = 100;
// const scoreValue = 100.3

// const isLoggedIn= false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId)
// Reference datatypes or non primitive datatype that allocate the refrence of actual data
 
// Array, Objects, Functions


//creating objects //on heap memory which give the value reference which mean the original value.
let userOne = {
email: "googlekabaap@gmail.com",
upi : "user@ybl"

}

let userTwo = userOne
userTwo.email= "abdulshamad@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)


