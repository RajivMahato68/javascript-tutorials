const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["java", "js", "rb", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
   
}
// const map = new Map()
// map.set('IN',"India")
// map.set('NP',"NEPAL")
// map.set('USA',"United State Of America")
                                                // don't use forin loop in map because forin loop not working in map 
// for (const key in map) {
//   console.log(key);
// }