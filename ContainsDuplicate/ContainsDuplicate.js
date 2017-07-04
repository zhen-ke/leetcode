/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let obj = {};
  let count = 1;
  for (let num of nums) {
    if (obj[num]) {
      obj[num] = ++obj[num]
      count++;
      if (count >= 2) {
        return true;
      }
    } else {
      obj[num] = 1;
    }
  }
  return false;
};
