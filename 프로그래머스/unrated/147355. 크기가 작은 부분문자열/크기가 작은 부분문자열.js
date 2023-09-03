function solution(t, p) {
let arr= []
var answer = 0;
let result

    
    for(let i=0; i<t.length; i++){
        if(t.substring(i,i+p.length).length == p.length){
            arr.push(t.substring(i,i+p.length))        
        }
            result = arr.filter(item => item <=p)
        
    }
    answer= result.length
   

    
    return answer;
}
