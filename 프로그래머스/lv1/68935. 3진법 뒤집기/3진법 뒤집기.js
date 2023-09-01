function solution(n) {
    var answer = "";
    
    let X = n.toString(3)
    console.log(X.length)
    for(let i = X.length-1; i>=0; i--){
        answer = answer + String(X[i])
    }
   answer = parseInt(answer, '3');
    

    return answer;
    
}