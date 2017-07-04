/**
 * @param {number[]} nums
 * @return {number}
 */

// 参考
var arrayNesting = function(nums) {
  let hashMap = {}
  let count = 0
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    count = 0;
    while (!hashMap[i]) {
      hashMap[i] = true
      count++
      i = nums[i]
    }
    max = Math.max(max, count)
  }
  return max
};
