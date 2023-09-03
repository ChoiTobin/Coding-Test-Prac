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

//t를 for문을 돌린다. 처음에 0~2 앞에것도 +1 뒤에것도 +1 해서 배열에 넣고
//map을 돌린후 item을 filter로 하여 p보다 작거나 큰것 만남긴후에 그놈의 length를 반환.