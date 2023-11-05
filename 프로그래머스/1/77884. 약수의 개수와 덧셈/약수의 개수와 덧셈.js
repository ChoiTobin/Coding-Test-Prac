function solution(left, right) {
    var answer = 0;
    let result =0
    
    for(let z=left; z<=right; z++){
        
      
        answer = 0
        for(let i = 0; i<=z; i++){
            if(z%i == 0){
                answer++
            }
        }
          if(answer % 2 == 0){
            //0 을 2로 나누면 
           result += z
        }else{
            result -= z
        }
    }
    
    return result;
}