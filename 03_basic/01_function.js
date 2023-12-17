
function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("I");
    console.log("p");
}

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){
//    let result = number1 + number2
//    return result

return number1 + number2
}
const result = addTwoNumber(3, 4)

// console.log("Result: ", result);


function loginUserMessage(userName = "sam"){
    if(userName === undefined){
console.log("Please enter a username");
return
    }
    return `${userName} just logged in`
}
console.log(loginUserMessage("hello"));
// console.log(loginUserMessage("Rajiv"))