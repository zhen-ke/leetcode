/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let arr = path.split("/");
  let result = "";
  //console.log(arr)
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "." || arr[i] === "") {
      arr.splice(i, 1)
      i--;
    }
    if (arr[i] === "..") {
      if (i - 1 < 0) {
        if (arr[i + 1] === "..") {
          arr.splice(i, 2);
          i--;
        } else {
          arr.splice(i, 1);
          i--;
        }
      } else {
        arr.splice(i - 1, 2);
        i = i - 2;
      }
    }
  }
  if (arr.length === 0) {
    result = "/"
  } else {
    for (var i = 0; i < arr.length; i++) {
      result += "/" + arr[i];
    }
  }
  return result;
};
