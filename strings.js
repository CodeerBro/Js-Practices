const name = "abdulsamad "
const repoCount = 50

//now below lines defined are really too low way to define things
// console.log(name + repoCount + " sumo")

//new way to define the same thing

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //its called string interpolation
// on the above line we can also use the uppercase type by using . operator just like 'name.uppercase' thats it.

//new way to declare string in js

const gameName = new String("Abdulshamad") //this will be start from the 0th position like 0 =A , 1=b and so on. buts its not an array.
// console.log(gameName)  
console.log(gameName[0])
console.log(gameName[5]) // it will print the fifth element of my name 's' initial from zero
console.log(gameName.length)
console.log(gameName.toUpperCase()) // Here the original value will not going to reflect because its on stack memory working with copy the value.
console.log(gameName.charAt(2))
console.log(gameName.indexOf('s'))
// learn all strings methods from mdn docs please


// now lets devide strings into the substrings.. ! always remember these all are basic yet.
const newString = gameName.substring(0)
console.log(newString)

const anotherString = gameName.slice(-8, 4) // Here we can define the string place in negative value to print that particular string of that number from rightside
console.log(anotherString)

const newStringOne= "   abdul samad    "
console.log(newStringOne) 
console.log(newStringOne.trim()) //trim string method is used to remove extra space before and after the value


const url = "https//:www.google.com/abdulsamad/sidd%20name"

console.log(url.replace('%20', '-')) //now this syntax will the replace the url %20 into -

console.log(url.includes('abdul')) //this will tell you if abdul is included in some value.
console.log(url.includes('sunds')) //this will tell you if abdul is included in some value.

// 
