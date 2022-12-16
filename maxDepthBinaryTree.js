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
 * @return {number}
 */

// RECURSIVE SOLUTION
 var maxDepth = function(root) {
  if (!root) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return 1 + Math.max(left,right);
};

// ITERATIVE SOLUTION
// var maxDepth = function(root) {
//   let max = 0;
//   const stack = [[root, 1]];

//   while (stack.length > 0) {
//       const [node, depth] = stack.pop();

//       if (depth > max) {
//           max = depth;
//       }

//       if (node.left) {
//           stack.push([node.left, depth + 1]);
//       }

//       if (node.right) {
//           stack.push([node.right, depth + 1]);
//       }
//   }

//   return max;
// };