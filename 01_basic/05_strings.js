const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "value");// don't use this type of concatinent 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('Rajiv-kumar-mahato')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherSting = gameName.slice(-2,4)
console.log(anotherSting);

const newString1 = "    rajiv   "
console.log(newString1);
console.log(newString1.trim());

const url ="https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'))
console.log(gameName.split('-'));
