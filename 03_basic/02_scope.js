// var c = 300
var a = 300
if(true){
    let a = 10
    const b = 20
    // var c= 30
    // console.log(a); that is print the value of in scope 
}

// console.log(a); that is print the value of value of global scope 
// console.log(b);
// console.log(c);  //that is a reason for not using var because without return scope value print the value so don't use const//




function one(){
    const userName = "Rajiv"
    function two(){
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);   //parent function can't call the child function
    // two()
}
// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



///++++++++++++++++++++++ interesting ++++++++++++++++++
// console.log(addone(5))
// function addone(num){
//     return num + 1
// }


// addTwo(5) //if you call the function then always give the error 
// const addTwo = function(num){
//     return num + 2
// }
