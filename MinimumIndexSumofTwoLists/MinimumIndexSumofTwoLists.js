/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let obj = {}
  let min = Infinity;
  let arr = []
  for (let key in list1) {
    obj[list1[key]] = obj[list1[key]] ? ++obj[list1[key]] : key
  }
  for (let key in list2) {
    if (obj[list2[key]]) {
      obj[list2[key]] = +obj[list2[key]] + +key
      if (obj[list2[key]] < min) {
        min = obj[list2[key]];
      }
    }
  }
  for (let key in obj) {
    if (obj[key] === min) {
      arr.push(key)
    }
  }
  console.log(obj)
  return arr

};
