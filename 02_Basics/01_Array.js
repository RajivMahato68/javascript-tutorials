// array

const myArr=[0,1,2,3,4,5]
const myHeros = ["shaktiman", "naaraj"]
const myarr2 = new Array(1,2,3,4)
console.log(myArr[2]);


// array method

// myArr.push(6)  //add the value in array
// myArr.push(7)
// myArr.pop() //remove the last vlaue in array

// myArr.unshift(9)   //insert in the array first value 
// myArr.shift()      // remove array first value

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newarr = myArr.join()

// console.log(myArr);
// console.log(typeof newarr);


//slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("b ",myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn1);
console.log("C ",myArr);
console.log(myn2);


// array is finsishhh