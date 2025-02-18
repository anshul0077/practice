

let clutter=""  
let passwordLength=10
let display=document.querySelector("#display")
let upcase=[ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
let lwcase=[ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
let num=[1,2,3,4,5,6,7,8,9,0]
let special=["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "\"", "<", ">", ",", ".", "?", "/"]
let randomvariable=[]

//selector
let lengthinput=document.querySelector("#lengthinput")
let lower=document.querySelector("#lowercaseCb")
let upper=document.querySelector("#uppercaseCb")
let digit=document.querySelector("#digitsCb")
let speci=document.querySelector("#specialsCb")
let btn =document.querySelector(".generate")
function selector(){
    if(lower.checked){
        console.log("lower is checkd"); 
        randomvariable.push(lwcase)
        
    }
    if(upper.checked){
        console.log("upper is checkd");
        randomvariable.push(upcase)
        
    }
    if(digit.checked){
        console.log("digi is checkd");
        randomvariable.push(num)

        
    }
    if(speci.checked){
        console.log("speci is checkd");
        randomvariable.push(special)
        
    }
    
}
btn.addEventListener('click',function(){
randomvariablegenerator()
})
function randomvariablegenerator(){
let passlength=Number( lengthinput.value)
console.log("thsi",passlength);

 clutter=''

 for(let i=0;i<passlength;i++){
        let rv=Math.floor(Math.random()*randomvariable.length)
        let  mainfxn=randomvariable[rv]
console.log(mainfxn.length)

let randomNumber2
    randomNumber2=(Math.floor(Math.random()*mainfxn.length)) 
    clutter+= mainfxn[randomNumber2]
    
    console.log(clutter);

    display.innerHTML=clutter
  
}
}


    
    
