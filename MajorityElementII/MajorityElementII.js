/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let obj = {};
  l = nums.length;
  let arr = [];
  for (let num of nums) {
    obj[num] = obj[num] ? ++obj[num] : 1;
  }
  for (let key in obj) {
    if (obj[key] > l / 3) {
      arr.push(+key);
    }
  }
  if (arr.length === 0) {
    if (nums.length >= 3) {
      return arr
    } else {
      return nums
    }
  } else {
    return arr
  }
};
