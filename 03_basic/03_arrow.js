// const user = {
//     username: "Rajiv",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, Welcome to Website`);
//         console.log(this);
//     }

// }

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this);


// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // you can't call this type of function you only call the object
// }
// chai()


// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }


// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai()

    // excplicit return 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//    if you use { } this bracket then write the return if not use {} this bracket you not use return 
// const addTwo = (num1, num2) => num1 + num2

    // implicit return 
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(5,4))



