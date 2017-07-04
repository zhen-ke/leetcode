/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  let l = candies.length;
  let kinds = new Set(candies).size;
  if (kinds > l / 2) {
    return l / 2
  } else {
    return kinds;
  }
};
