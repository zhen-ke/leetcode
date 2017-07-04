/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  var n = nums.sort(function(a, b) {
    return a - b });
  var result = 0;
  for (var i = n.length - 1; i > 0; i--) {
    result += n[i] - n[0];
  }
  return result;
};
