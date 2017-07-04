/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  if (nums.length === 0) return null
  let obj = {};
  let arr = [];
  let temp;
  let result = []
  for (let key of nums) {
    obj[key] = obj[key] ? ++obj[key] : 1;
  }
  for (let key in obj) {
    arr.push([key, obj[key]]);
  }
  temp = arr.sort((a, b) => b[1] - a[1]);

  for (let key of temp) {
    if (result.length < k) {
      result.push(+key[0])
    }
  }
  //console.log(temp.toString(),result);
  return result;
};
