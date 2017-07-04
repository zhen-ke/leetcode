/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let obj = {};
  let count = 0;
  let arr = nums.sort((a, b) => a - b);
  let arrnew = Array.from(new Set(arr));
  for (let key in arrnew) {
    obj[key] = arrnew[key];
    count++
  }
  console.log(obj)
  for (let key in obj) {
    if (count >= 3) {
      return obj[count - 3];
    } else if (count === 1) {
      return obj[count - 1];
    } else {
      return obj[count - 1];
    }
  }
};
