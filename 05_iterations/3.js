// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello world!"

// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
// }

//maps

const map = new Map()
map.set('IN',"India")
map.set('NP',"NEPAL")
map.set('USA',"United State Of America")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);      //Doesn't use forof loop in object
    
// }
