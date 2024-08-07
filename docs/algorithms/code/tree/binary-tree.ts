import { TreeNode } from "./TreeNode";

// 初始化节点
let n1 = new TreeNode(1),
  n2 = new TreeNode(2),
  n3 = new TreeNode(3),
  n4 = new TreeNode(4),
  n5 = new TreeNode(5);
// 构建节点之间的引用（指针）
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;

console.log(n1);

// 插入与删除节点
const P = new TreeNode(0);
// 插入
n1.left = P;
P.left = n2;
// 删除
n1.left = n2;

console.log(n1);

export default n1;
