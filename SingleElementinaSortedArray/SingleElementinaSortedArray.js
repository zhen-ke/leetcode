/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let o = {}
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (o[nums[i]] !== undefined) {
      o[nums[i]] = ++o[nums[i]]
      continue;
    }
    o[nums[i]] = 1;
  }
  for (key in o) {
    if (o[key] == 1) {
      result += +key;
    }
  }
  return result;
};
