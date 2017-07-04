/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
  let obj = {}
  let temp = "";
  let pathstostring = paths.toString();
  let l = pathstostring.length;
  let left = 0;
  let right = 0;
  for (let i = 0; i < l; i++) {
    if (pathstostring[i] === "(") {
      left = i;
    }
    if (pathstostring[i] === ")") {
      right = i;
    }
    if (left !== 0 && right !== 0) {
      temp = pathstostring.slice(left + 1, right);
      if (obj[temp] === undefined) {
        obj[temp] = 0;
      }
      obj[temp] = obj[temp] + 1;
      left = 0;
      right = 0;
      temp = "";
    }
  }
  for (let r in obj) {
    if (obj[r] === 1) {
      delete(obj[r]);
    }
  }
  let arrs = [];
  for (let key in paths) {
    arrs.push(paths[key].split(" "));
  }
  for (let p in obj) {
    obj[p] = [];
    for (var i = 0; i < arrs.length; i++) {
      for (var j = 1; j < arrs[i].length; j++) {
        if (arrs[i][j].indexOf("(" + p + ")") !== -1) {
          // if(eval("/\\(" + p + "\\)/g").test(arrs[i][j])){
          obj[p].push(arrs[i][0] + "/" + arrs[i][j].slice(0, (arrs[i][j].length - (p.length + 2))));
        }
      }
    }
  }
  arrs = [];
  for (var s in obj) {
    arrs.push(obj[s])
  }
  return arrs;
};
