import { TreeNode } from "./TreeNode";
import n1 from "./binary-tree";

/* 层序遍历 */
function levelOrder(root: TreeNode | null): number[] {
  // 初始化队列，加入根节点
  const queue = [root];
  // 初始化一个列表，用于保存遍历序列
  const list: number[] = [];
  while (queue.length) {
    let node = queue.shift() as TreeNode; // 队列出队
    list.push(node.val); // 保存节点值
    if (node.left) {
      queue.push(node.left); // 左子节点入队
    }
    if (node.right) {
      queue.push(node.right); // 右子节点入队
    }
  }
  return list;
}

console.log(levelOrder(n1)); // [1,2,3,4,5]
