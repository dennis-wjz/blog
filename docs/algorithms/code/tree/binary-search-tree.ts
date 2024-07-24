import { TreeNode } from "./TreeNode";

/* 查找节点 */
search(num: number): TreeNode | null {
  let cur = this.root;
  // 循环查找，越过叶节点后跳出
  while (cur !== null) {
      // 目标节点在 cur 的右子树中
      if (cur.val < num) cur = cur.right;
      // 目标节点在 cur 的左子树中
      else if (cur.val > num) cur = cur.left;
      // 找到目标节点，跳出循环
      else break;
  }
  // 返回目标节点
  return cur;
}