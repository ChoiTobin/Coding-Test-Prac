/**
 * @param {number[]} nums
 * @return {number}
 */

var arrayPairSum = function(nums) {
let sum=0
    nums.sort((a,b) => a-b)
    //정렬
    for(let i=0; i<nums.length;i+=2){
        sum = sum + nums[i] 
    }
    
    return sum

};