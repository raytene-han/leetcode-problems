/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
////////////////// ITERATIVELY /////////////////////
 var reverseList = function(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current) {
      next = current.next;
      current.next = prev;

      prev = current;
      current = next;
  }

  return prev;
};

////////////////// RECURSIVELY /////////////////////
var reverseList = function(head, prev=null) {
  if (!head) return prev;

  const next = head.next;
  head.next = prev;

  return reverseList(next, head);
};