/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  let obj = {}
  let arr2 = []
  let max = -Infinity;
  for (let key of nums) {
    obj[key] = obj[key] ? ++obj[key] : 1;
  }

  for (let key in obj) {
    arr2.push(+key);
  }

  arr2.sort((a, b) => a - b);

  for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] - arr2[i - 1] === 1) {
      if (max < obj[arr2[i - 1]] + obj[arr2[i]]) {
        max = obj[arr2[i - 1]] + obj[arr2[i]];
      }
    }
  }
  //console.log(obj,arr2)
  if (max === -Infinity) {
    return 0;
  }
  return max;
};
