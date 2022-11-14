/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// RECURSIVE SOLUTION
 var invertTree = function(root) {
  if (!root) return null;

  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

// ITERATIVE SOLUTION
//  var invertTree = function(root) {
//   if (!root || (!root.left && !root.right)) return root;

//   let currentNode = root;
//   let queue = [currentNode];

//   while (queue.length > 0) {
//       if (currentNode !== null && (currentNode.left || currentNode.right)) {
//           const temp = currentNode.left;
//           currentNode.left = currentNode.right;
//           currentNode.right = temp;
//           queue.push(currentNode.left, currentNode.right);
//       }
//       queue.shift();
//       currentNode = queue[0];
//   }

//   return root;
// };