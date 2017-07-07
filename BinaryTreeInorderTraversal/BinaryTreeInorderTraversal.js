/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
  let arr = []

  function traverse(tree) {
    if (tree) {
      traverse(tree.left);
      arr.push(tree.val);
      traverse(tree.right);
    }
  }
  traverse(root);
  return arr
};
