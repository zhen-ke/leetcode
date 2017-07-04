/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let arr = [];
  let temp = 0;
  let count = 0;
  for (let i = 0; i <= num; i++) {
    temp += i.toString(2);
    for (var j = 0; j < temp.length; j++) {
      if (temp[j] == "1") {
        count++;
      }
    }
    arr.push(count);
    temp = "";
    count = "";
  }
  return arr;
};
