//4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s+/);
const [n, a, ...arr] = input;
// console.log(n, a, arr);

let sum = 0;
for (let i = 0; i < arr.length; i += 2) {
  sum = sum + arr[i] * arr[i + 1];
}
if (sum == n){
     console.log("Yes");
}else{console.log("No");
    
}