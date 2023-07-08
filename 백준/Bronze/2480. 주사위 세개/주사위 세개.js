var fs = require('fs');
const { stringify } = require('querystring');
var input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');


let rand1 = +input[0]
let rand2 = +input[1]
let rand3 = +input[2]



if(rand1 ==rand2 && rand2 == rand3){
    console.log(10000+rand2*1000)

}else if(rand1 == rand2 || rand1 ==rand3|| rand2 == rand3){
    if(rand1 == rand2)
    {
        console.log(1000+rand2*100)

    }else if(rand3 == rand2)
    {   
        console.log(1000+rand2*100)

    }else if (rand1 == rand3)
    {
        console.log(1000+rand3*100)
    }

}else if(rand1 != rand2 && rand1 !=rand3 && rand3 != rand2){
    let counter = Math.max(rand1,rand2,rand3)
    console.log(counter*100)

}