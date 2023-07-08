const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let count ="";
for(let i=1; i<= +input[0]; i++)count += +input[i].split(' ')[0]+ +input[i].split(' ')[1] + '\n';console.log(count)