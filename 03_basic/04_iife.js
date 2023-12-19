//  Immediately Invoked Function Expressions (IIFF)
//   global scope k poluction se problem hoti he kai bar global scope k variable palucation hatane k liya IIFF ka use karate he 

// if you use iffe then this function is excute very fast 
(function chai(){

    //named iffe
    console.log(`DB CONNECTED`);
})();

(  (name) => {

    //simple iffe
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')

