// if 

// const isUserloggedIn = true
// const temperture = 41

// if( temperture === 40){
//     console.log("less than 50");

// }
// else{
//     console.log("temperture is greater than 50");
// }

// console.log("excuted");

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }


// const balance = 1000
// if (balance > 500) console.log("test"),
// console.log("test2"); don't do this type of condition beacuse this type is very bad pratice

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750) {
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 750");
// }else{
//     console.log("less than 1250");
// }




const isUserloggedIn = true
const debitCard =true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (isUserloggedIn && debitCard) {
    console.log("allow to buy ciurse");
}
if (LoggedInFromEmail || LoggedInFromGoogle) {
    console.log("user logged in ");
}