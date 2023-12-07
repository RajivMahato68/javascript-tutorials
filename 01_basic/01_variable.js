const accountId = 1445555
let accountEmail = "rajiv@gamil.com"
var accountPassword = "1234"
accountCity = "gaushala"//variable declare in this type but not use in this type of variable
let accountState; // if you declare the variable but you not assign the any value then js is assume in variable in undefined
// accountId = 2  // not allowed
/*
prefer not to use var
because of issue in block scope and functional scope
*/
 accountEmail ="r@gamil.com"
 accountPassword="2145"
 accountCity= "lalitpur"
console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])