function Name(){
    console.log("A")
    console.log("B")
    console.log("D")
    console.log("U")
    console.log("L")
    console.log("S")
    console.log("A")
    console.log("M")
    console.log("A")
    console.log("D")
}
// Name()
function addTwoNumbers(num1, num2){
    //  console.log(num1 + num2)
    let result = (num1 + num2);
 return result;
 console.log("Hey abdulsamad") //this is a unreachable line of code which is not possible to execute.
 // It is a rule of function after the return any line won't be execute.

}
let result = addTwoNumbers(5,7);
// console.log("your result is ", result)

// function loginMessage(username){
    function loginMessage(username = "sam"){ // It is second method to give a username where user will never be invalid
        // just like if you enter a username then it will accept it otherwise it will assign username sam


    // below line can be also like 'if(!username){
        // console.log("Please enter a username")
    //}
    if(username === undefined){
        console.log("Please Enter your name")
        return
        // I use return to avoid the below line execution at same time.

    }
//    return `${username} Just logged in`
   return `Welcome ${username} You just loggin in`
}
// console.log(loginMessage(" Abdulsamad"))
// console.log(loginMessage())


// Lets learn soemthing else in function

// function calculatePriceCart(...num1){
function calculatePriceCart(val, val2, ...num1){ // Now i passed total 4 arguments and in this type of scenario argument 1 and 2
    // will be store in val assigned 300, and val2 assigned 400 and rest of the thing assigned by rest operator.
    return num1;

}
// console.log(calculatePriceCart(300,400,500,600)) // we used "..." it is called rest operator in function which is help to pass
// the value in function more than one as a parameter. // in terms of array "..." it is called spread operator;

// -----------------------Okay so now i'm goint to play with objects using functions---------------------

let user = {
    username : "Abdulsamad",
    price : 199,
}
function handleUser(anyobject){   // Here left side you can see i define "anyobject" as a parameter.
    // So please never confuse it just a name, We can assign any name as a paramenter.
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleUser(user);

// handleUser({
//     username : "samad",
//     price : 399
// })
handleUser({
    username : "Samad",
    price : 399,
})

const myNewArray = [100, 200, 3400]

function returnSecondValue(getArray){
 return getArray[1]
}
console.log(returnSecondValue(myNewArray))
