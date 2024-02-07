//singleton  Obeject.create

// Now we are practicing with object literals
const mySym = Symbol("key1")

const JsUser = {
    "Full name": "Abdul samad siddiqui",
   name : "abdul",
   age : 19,
   location: "Lucknow",
   email: "abdulsamad@zeroone.com",
   isLoggedIn: false,
   lastLoginDays: ["monday", "Saturday"],

   [mySym] : "mykey2", // I think it is defining the key.
}
// console.log(JsUser.location)
// console.log(JsUser["email"])
// console.log(JsUser["Full name"])
// console.log(typeof JsUser.mySym)
// console.log(JsUser[mySym])

// JsUser.email = "abdulsamad@nine.com"
// JsUser.name = "Abdul shamad"
// // Object.freeze(JsUser)
// JsUser.email = "hellodear@gmail.com"
// console.log(JsUser)

// JsUser.greeting = function(){
//     console.log("Hello js user")


// console.log(JsUser.greeting())

// function hello(number, number2){
//       console.log(number + number2)
// }
// hello(2);

// class hello2{
//     [a] = Symbol("abdulsamad")
    

// }
// console.log(hello2[a])


//Objects literals
const mySim = Symbol("key1")

const JsBhai = {
    [mySim]: mykey1,

    
    
}
console.log(mySim)
// console.log(typeof mySim);







