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
// var invertTree = function(root) {
//   const stack = [];
//   if (root) stack.push(root);

//   while (stack.length > 0) {
//       const node = stack.pop();

//       if (node.left) stack.push(node.left);
//       if (node.right) stack.push(node.right);

//       [node.left, node.right] = [node.right, node.left];
//   }

//   return root;
// };