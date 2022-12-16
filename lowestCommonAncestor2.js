/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {

  const queue = [[root, [root]]];

  let pList = null;
  let qList = null;

  while (!(pList && qList)) {
      const [node, parents] = queue.shift();

      if (node.val === p.val) {
          pList = parents;
      } else if (node.val === q.val) {
          qList = parents;
      }

      if (node.left) {
          queue.push([node.left, [...parents, node.left]]);
      }

      if (node.right) {
          queue.push([node.right, [...parents, node.right]]);
      }
  }

  const pSet = new Set(pList);
  const common = [];

  for (let parent of qList) {
      if (pSet.has(parent)) common.push(parent);
  }

  return common.pop();
};