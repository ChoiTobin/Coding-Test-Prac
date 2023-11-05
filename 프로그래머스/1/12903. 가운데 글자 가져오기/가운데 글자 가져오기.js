function solution(s) {
    var answer = '';

    if (s.length % 2 == 0) { 
        answer = s.charAt(Math.ceil(s.length / 2) - 1) + s.charAt(Math.ceil(s.length / 2));
    } else {
        answer = s.charAt(Math.ceil(s.length / 2) - 1);
    }

    return answer;
}
