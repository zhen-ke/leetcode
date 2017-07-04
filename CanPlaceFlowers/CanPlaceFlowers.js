/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let arr = flowerbed.slice(0);
  let l = arr.length;
  let count = 0;
  arr.unshift(0);
  arr.push(0);
  for (var i = 0; i < l; i++) {
    if (arr[i] === 0) {
      if (arr[i + 1] !== 1 && arr[i + 2] !== 1 && arr[i + 1] !== undefined) {
        arr[i + 1] = 1;
        count++;
      }
    }
  }
  //console.log(count,arr)
  if (n <= count) {
    return true;
  } else {
    return false;
  }
};
