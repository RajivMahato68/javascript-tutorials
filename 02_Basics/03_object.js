// singleton(make a constar is called singleton object you make like this=object.create)

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name:"Rajiv",
    "full name": "Rajiv Mahato",
    [mySym]: "mykey1",
    age:18,
    location:"Mahottary",
    email:"rajipmahato68@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday",  "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// jsUser.email ="hitesh@gmail.com"
// // Object.freeze(jsUser)
// jsUser.email = "chartgpt@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("HEllo js user");

}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);

}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
