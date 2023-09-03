function solution(t, p) {
let arr= []
var answer = 0;
let result

    
    for(let i=0; i<t.length; i++){
        if(t.substring(i,i+p.length).length == p.length && t.substring(i,i+p.length)<=p ){
                answer++
        
        }
        
    }
    
 
    return answer;
}

