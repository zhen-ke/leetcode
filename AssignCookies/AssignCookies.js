/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let a = g.sort((a, b) => a - b)
  let b = s.sort((a, b) => a - b)
  let i = 0
  let j = 0
  let count = 0

  while (i < g.length & j < s.length) {
    if (a[i] <= b[j]) {
      count++
      b[j] = false
      i++
      j++
    } else {
      j++
    }
  }
  return count
};
