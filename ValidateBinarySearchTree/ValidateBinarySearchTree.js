/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let arr = [];
  if (root == undefined) return true;

  function traverse(tree) {
    if (tree) {
      traverse(tree.left);
      arr.push(tree.val);
      traverse(tree.right);
    }
  }
  traverse(root);

  for (var i = 1; i < arr.length; i++) {
    if (arr[i - 1] >= arr[i]) {
      return false;
    } else if (arr[i] == null) {
      return false;
    }

  }
  return true;

};
