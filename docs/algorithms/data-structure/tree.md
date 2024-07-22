---
title: 树
customTag: algorithms>数据结构
date: 2024.07.13
editLink: true
---

# 树



## 二叉树

![](https://raw.githubusercontent.com/dennis-wjz/pic-go-assert-store/master/image/20240716120614.png)



常见二叉树类型：

- 完美二叉树：所有层的节点都被完全填满
- 完全二叉树：只有最底层的节点未被填满，且最底层节点尽量靠左填充
- 完满二叉树：除了叶节点之外，其余所有节点都有两个子节点
- 平衡二叉树：任意节点的左子树和右子树的高度之差的绝对值不超过 1



## 二叉树遍历

常见遍历方式：

- 层序遍历：从顶部到底部逐层遍历二叉树，并在每一层按照从左到右的顺序访问节点 本质上也叫**广度优先遍历**，也称为**广度优先搜索(BFS)**

![](https://raw.githubusercontent.com/dennis-wjz/pic-go-assert-store/master/image/20240718105621.png)

> **广度优先遍历通常借助“队列”来实现:**

```ts
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
```



- 前序遍历/中序遍历/后序遍历: **深度优先遍历**，也称**深度优先搜索（DFS）**

![](https://raw.githubusercontent.com/dennis-wjz/pic-go-assert-store/master/image/20240718135746.png)

> **深度优先搜索通常基于递归实现:**

```ts
/* 前序遍历 */
function preOrder(root: TreeNode | null): void {
  if (root === null) {
    return;
  }
  // 访问优先级：根节点 -> 左子树 -> 右子树
  list.push(root.val);
  preOrder(root.left);
  preOrder(root.right);
}

/* 中序遍历 */
function inOrder(root: TreeNode | null): void {
  if (root === null) {
    return;
  }
  // 访问优先级：左子树 -> 根节点 -> 右子树
  inOrder(root.left);
  list.push(root.val);
  inOrder(root.right);
}

/* 后序遍历 */
function postOrder(root: TreeNode | null): void {
  if (root === null) {
    return;
  }
  // 访问优先级：左子树 -> 右子树 -> 根节点
  postOrder(root.left);
  postOrder(root.right);
  list.push(root.val);
}
```

- 前序遍历：根节点→左子树→右子树
- 中序遍历：左子树→根节点→右子树
- 后序遍历：左子树→右子树→根节点
