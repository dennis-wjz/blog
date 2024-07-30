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

// NOTE: 没有很理解插入逻辑跟删除逻辑
/* 插入节点 */
insert(num: number): void {
  // 若树为空，则初始化根节点
  if (this.root === null) {
      this.root = new TreeNode(num);
      return;
  }
  let cur: TreeNode | null = this.root,
      pre: TreeNode | null = null;
  // 循环查找，越过叶节点后跳出
  while (cur !== null) {
      // 找到重复节点，直接返回
      if (cur.val === num) return;
      pre = cur;
      // 插入位置在 cur 的右子树中
      if (cur.val < num) cur = cur.right;
      // 插入位置在 cur 的左子树中
      else cur = cur.left;
  }
  // 插入节点
  const node = new TreeNode(num);
  if (pre!.val < num) pre!.right = node;
  else pre!.left = node;
}

/* 删除节点 */
remove(num: number): void {
  // 若树为空，直接提前返回
  if (this.root === null) return;
  let cur: TreeNode | null = this.root,
      pre: TreeNode | null = null;
  // 循环查找，越过叶节点后跳出
  while (cur !== null) {
      // 找到待删除节点，跳出循环
      if (cur.val === num) break;
      pre = cur;
      // 待删除节点在 cur 的右子树中
      if (cur.val < num) cur = cur.right;
      // 待删除节点在 cur 的左子树中
      else cur = cur.left;
  }
  // 若无待删除节点，则直接返回
  if (cur === null) return;
  // 子节点数量 = 0 or 1
  if (cur.left === null || cur.right === null) {
      // 当子节点数量 = 0 / 1 时， child = null / 该子节点
      const child: TreeNode | null =
          cur.left !== null ? cur.left : cur.right;
      // 删除节点 cur
      if (cur !== this.root) {
          if (pre!.left === cur) pre!.left = child;
          else pre!.right = child;
      } else {
          // 若删除节点为根节点，则重新指定根节点
          this.root = child;
      }
  }
  // 子节点数量 = 2
  else {
      // 获取中序遍历中 cur 的下一个节点
      let tmp: TreeNode | null = cur.right;
      while (tmp!.left !== null) {
          tmp = tmp!.left;
      }
      // 递归删除节点 tmp
      this.remove(tmp!.val);
      // 用 tmp 覆盖 cur
      cur.val = tmp!.val;
  }
}