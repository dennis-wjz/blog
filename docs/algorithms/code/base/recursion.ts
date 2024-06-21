// 普通递归
function recur(n: number): number {
  if (n === 1) return 1;
  const res = recur(n - 1);
  return n + res;
}

console.log(recur(10));

// 尾递归
function tailRecur(n: number, res: number): number {
  if (n === 0) return res;
  return tailRecur(n - 1, n + res);
}

console.log(tailRecur(10, 0));
