/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
   let map = new Map();
   let sum = 0;
   let count = 0;

   for (let i = 0; i < s.length; i++) {
      if (map.has(s[i])) {
         map.set(s[i], map.get(s[i]) + 1);
      } else {
         map.set(s[i], 1);
      }
   }

   for (let val of map.values()) {
      if (val % 2 === 0) {
         sum += val;
      } else if (val > 1) {
         sum += val - 1;
         count++;
      } else {
         count++;
      }
   }

   if (count > 0) {
      sum += 1;
   }

   return sum;
};

let s = "ccc";
console.log(longestPalindrome(s)); // 결과값: 3




    
    
    
    
//홀수가 여러개가 아닐때 하나면 포함시켜주고 여러개면 한개만 나둠. 만약 
//홀수가 여러개 아닐때 1개일떄 홀수가 여러개여도 홀수 없을떄만 넣어둔다  하나 없앤다. ex ccccc =>한개를 뺌
//짝수면 갯수를 새알려준다.
    
    
