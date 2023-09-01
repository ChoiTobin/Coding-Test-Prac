function solution(n,arr1,arr2) {

    let result = [];
    let difResult = [];
    let partResult = [];
    var answer = [];

    for (let i = 0; i < n; i++) {
        result.push(arr1[i].toString(2).padStart(n, "0"));
        difResult.push(arr2[i].toString(2).padStart(n, "0"));
    }

    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
            if (result[j][i] === "1" || difResult[j][i] === "1") {
                partResult.push("#");
            } else {
                partResult.push(" ");
            }
        }
        answer.push(partResult.join('')); // 문자열로 결합해서 추가
        partResult = [];
    }
    return answer;
}

