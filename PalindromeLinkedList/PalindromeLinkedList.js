/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head == null) {
    return true;
  }
  let cur = head
  let temp1 = ""
  let temp2 = ""
  while (cur != null) {
    temp1 += cur.val
    cur = cur.next
  }
  temp2 = temp1.split("").reverse().join("")
  if (temp1 === temp2) {
    return true
  } else {
    return false
  }
};
