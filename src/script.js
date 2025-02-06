let arr=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
let stati=""
let gradient=""

function generatorone(){
    let hexcode="#"
    for(let i=0;i<=6;i++){
        let random=Math.floor((Math.random()*16))
      let reslut=arr[random]
     hexcode+=reslut
    
    }
    console.log(hexcode);
}
function generatortwo(){
    let hexcode="#"

    for(let i=0;i<=6;i++){
        let random=Math.floor((Math.random()*16))
      let reslut=arr[random]
     hexcode+=reslut
    
    }
    console.log(hexcode);
}
generatorone()
generatortwo()

