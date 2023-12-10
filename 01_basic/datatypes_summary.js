//primitive

// 7 types : string, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)


const bigNumber = 3456987559852n


//Reference type (Non Primitive)
// Array, Object, Functions

const heros = ["shaktiman" , "naaraj", "doga"]

let myObj = {
    name:"rajiv",
    age:20,
}

const myfunction =function(){
    console.log("Hello world");
}

console.log(typeof anotherId)

//+++++++++++++++++++++++++++++++

// there are two type of memory
//1 stack (All the Primitive data type use)
//2 heap (All the Non-Primitive data type use)

let myYoutubename ="Rajiv"

let anothername = myYoutubename
console.log(myYoutubename)
anothername = "chai aur code"
console.log(anothername)

let userOne = {
    email: "user@gamil.com",
    upi: "userpayment"
}

let userTwo = userOne

userTwo.email = "rajiv@gmail.com"
 console.log(userOne.email);
 console.log(userTwo.email);
 
