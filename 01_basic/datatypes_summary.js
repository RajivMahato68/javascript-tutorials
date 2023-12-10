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