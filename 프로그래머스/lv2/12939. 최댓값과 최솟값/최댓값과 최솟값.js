function solution(s) {
    var answer = '';
    let arr = []

    arr = s.split(" ")

    answer = Math.min(...arr) + " " +Math.max(...arr)

    return answer;
    
}

//split "" 해서 띄어쓰기 없애고 Number로 만들기
//-포함되어있으면 -배열에 없으면 정수배열에 넣어서 매서드로 min max 뽑아내기
