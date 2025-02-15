let lengthInput=document.querySelector("#length").value
console.log("range inout",lengthInput);

let options=document.querySelector(".options")
options.addEventListener("click",function(e){
 if(e.target.tagName==="INPUT"){
    console.log(e.id);
    
 }
})



// logic part
let clutter=""  
let passwordLength=10
let upcase=[ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
let lwcase=[ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
let num=[1,2,3,4,5,6,7,8,9,0]
let special=["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "\"", "<", ">", ",", ".", "?", "/"]
 let rf=refersh()
function refersh(){
    let uservalue=""
    uservalue=upcase
    return uservalue
}





let randomvariable=[num]
randomvariable.push(rf)
for(let i=0;i<=10;i++){
    let rv=Math.floor(Math.random()*randomvariable.length)
    let mainfxn=randomvariable[rv]
    
    pass(mainfxn)
}

function pass (arr){
    console.log("length", arr.length)


    let randomNumber
        randomNumber=(Math.floor(Math.random()*arr.length)) 
        clutter+= arr[randomNumber]
  
    }
    console.log(clutter);