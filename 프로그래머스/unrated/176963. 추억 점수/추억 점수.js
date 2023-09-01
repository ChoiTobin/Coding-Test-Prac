function solution(name, yearning, photo) {
    var answer = [];
    let obj ={}
    let sum = 0
    for(let i=0; i<name.length; i++)
    {    
    obj[name[i]] = yearning[i]
     //객체 추가 완료   
    }
    for(let j=0; j<photo.length; j++){
        sum = 0;
        
        for(let i=0; i<photo[j].length; i++){

        if(obj[photo[j][i]] == undefined){
            sum =sum + 0
            }else {
                 sum += obj[photo[j][i]]
            }
        }
        //console.log(sum)
       answer.push(sum)
        
    }
    
    return answer;
}
