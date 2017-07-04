/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs2 = function(nums, k) {
  let l = nums.length;
  let count = 0;
  let obj = {};
  if (k < 0) return 0;
  if (k === 0) {
    for (var i = 0; i < l; i++) {
      if (obj[nums[i]] === undefined) {
        obj[nums[i]] = 0;
      }
      obj[nums[i]] = obj[nums[i]] + 1;
    }
    for (let key in obj) {
      if (obj[key] > 1) {
        count++
      }
    }
  } else {
    for (var i = 0; i < l; i++) {
      obj[nums[i]] = nums[i] + k;
    }
    let temp = [];
    for (let key in obj) {
      temp.push(obj[key]);
    }
    for (var i = 0; i < temp.length; i++) {
      if (obj[temp[i]]) {
        count++;
      }
      if (temp[i] === 0) {
        count++;
      }
    }
  }
  //console.log(count)
  return count;
};
var findPairs1 = function(nums, k) {
  let tmp = nums.sort((a, b) => a - b);
  let res = {};
  for (let i = 0; i < tmp.length; i++) {
    for (let j = i + 1; j < tmp.length; j++) {
      if (tmp[j] - tmp[i] === k) res[tmp[i]] = tmp[j];
      if (tmp[j] - tmp[i] > k) break;
    }
  }
  return Object.keys(res).length;

};
var findPairs = function(nums, k) {
  let l = (nums.sort((a, b) => a - b)).length;
  let obj = {};
  for (var i = 0; i < l; i++) {
    for (var j = 0; j < i; j++) {
      if (nums[i] - nums[j] === k) {
        obj[nums[i] + "-" + nums[j]] = true;
      }
    }
  }
  return Object.keys(obj).length;
};
