/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  let arr = s.split(' ')
  let count = 0;
  for (let key of arr) {
    if (key.length !== 0) {
      count++
    }
  }
  return count;
};
