const userEmail = []

if(userEmail) {
    console.log("Got User email");
}else{
    console.log("dont have user email");
}

// falsy value

// false, 0,  -0, BigInt 0n, "", null, undefined, Nan

//truthy vlauess
// "0", 'false' " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj ={}
if (Object.keys(emptyObj).length ===0) {
    console.log("object is empty");
}

// Nullish Coalescing Operator (??) : Null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 20 ?? 15

console.log(val1);

//terniary Operator

// condition ? true : false


const iceTeaPrice = 100
iceTeaPrice <=10 ?console.log("less than 10") : console.log("more than 10");



