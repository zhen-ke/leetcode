/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  let l1 = a.length;
  let l2 = b.length;
  if (l1 !== l2) {
    return l1 > l2 ? l1 : l2;
  } else if (a !== b) {
    return l1
  } else {
    return -1;
  }
};
