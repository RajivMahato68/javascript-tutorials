// reduce 
const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,curval){
//     console.log(`acc: ${acc} and currval : ${curval}`);
//     return acc + curval
// }, 0)

// console.log(myTotal);

// const myTotal = myNums.reduce( (acc,curval)=> acc+curval,0)
// console.log(myTotal);

const shoopingCart = [
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "java",
        price:3999
    },
    {
        itemName: "phython",
        price:1999
    },
    {
        itemName: "mobile programming",
        price:4999
    }
]

const mytopay=shoopingCart.reduce( (acc,item)=>acc + item.price,0)
console.log(mytopay);