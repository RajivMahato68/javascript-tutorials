// generating a random color

const randomcolor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

// console.log(randomcolor());
let intervalid;

const startchangingColor = function(){
 if(!intervalid){
    intervalid = setInterval(changebgColor, 1000)
 }
 
   function changebgColor(){
    document.body.style.backgroundColor = randomcolor();
};
   }
const stopchangingColor = function(){
    clearInterval(intervalid);
    intervalid = null;
};
document.querySelector("#start").addEventListener("click",startchangingColor)

document.querySelector("#stop").addEventListener("click",stopchangingColor)