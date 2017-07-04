/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let obj = {};
  let arr = [];
  for (let key of nums) {
    obj[key] = 0;
  }
  for (let key in obj) {
    arr.push(+key);
  }
  let result = []
  for (var i = 1; i <= nums.length; i++) {
    result.push(i);
  }
  for (let key of arr) {
    obj[key] = true;
  }
  let c = []
  for (var i = 0; i < result.length; i++) {
    if (!obj[result[i]]) {
      c.push(result[i])
    }
  }
  //console.log(c)
  return c;
};
