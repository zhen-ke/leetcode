/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  if (area === 0) return []
  let w = Math.floor(Math.sqrt(area))
  let arr = []
  while (area % w !== 0) {
    w--
  }
  let l = area / w
  arr.push(l, w)
  return arr
};
