/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let num = nums.sort((a, b) => a - b)
  let arr = [];
  for (let i = 1; i < num.length; i++) {
    if (num[i - 1] === num[i]) {
      arr.push(num[i])
    }
  }
  return arr;
};
