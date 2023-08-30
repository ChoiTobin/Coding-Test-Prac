function solution(s) {
    var answer = '';
    let arr = []

    arr = s.split(" ")

    answer = Math.min(...arr) + " " +Math.max(...arr)

    return answer;
    
}


