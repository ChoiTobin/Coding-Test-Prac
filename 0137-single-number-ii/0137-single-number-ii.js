/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    for(let i=0; i<nums.length; i++){
        let indexNumber = nums.indexOf(nums[i])

       let searchNumber = nums.slice(0, indexNumber).concat(nums.slice(indexNumber + 1));
        
        if(searchNumber.indexOf(nums[i]) === -1){
          return nums[i];

            }
        }
        
    }
