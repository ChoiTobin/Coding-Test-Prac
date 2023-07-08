const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let h = +input[0].split(' ')[0];
let m = +input[0].split(' ')[1];
let m2 = +input[1]


if( m + m2 > 59){
    h++ 
    if(h > 23 ){
        h =0
                }
    m = m + m2
    m = m - 60
for(i = 0; i< 100; i++){
    if(m > 59 ){
        h++
        m = m - 60
        if(h > 23 ){
            h =0
                    }
                }
                        }
    

console.log(h,m)
}

else if( m + m2 <= 59){
    m = m + m2
console.log(h,m)    
}