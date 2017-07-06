/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let a = n.toString(2)
  let count = 0
  for (let key of a) {
    if (+key === 1) {
      count++
    }
  }
  return count
};
