// const coding =["js", "ruby", "java", "phythn", "cpp"]

// const values=coding.forEach( (item)=>{
//     console.log(item);
//     return item
// })
// console.log(values);

const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumber.filter((num)=> {
//      return num > 4
// })

// const newNums = []
// myNumber.forEach( (num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


let userBooks = books.filter( (bk)=> bk.genre === 'History')

userBooks= books.filter( (bk) => {
    return bk.publish >= 1994 && bk.genre === "History"
})
console.log(userBooks);
