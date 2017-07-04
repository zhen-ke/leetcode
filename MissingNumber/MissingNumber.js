/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let arr = nums.sort((a, b) => a - b)
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] !== i) {
      return i
    }
  }
};
