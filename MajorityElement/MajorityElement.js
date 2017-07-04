/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let obj = {};
  l = nums.length;
  for (let num of nums) {
    if (obj[num]) {
      obj[num] = ++obj[num]
    } else {
      obj[num] = 1;
    }
  }
  //console.log(obj)
  for (let key in obj) {
    if (obj[key] >= l / 2) {
      return +key;
    }
  }
  return Math.max.apply(Math, nums);
};
