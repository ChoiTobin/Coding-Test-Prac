function solution(n, m, section) {
    var answer = 0;
    let painted = 0;
    
    for(var sections of section){
        
        if(sections > painted){
            answer++ 
            painted = sections+(m-1)
        }
    }
    
  
    
    return answer;
}
