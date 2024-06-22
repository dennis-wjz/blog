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

// 递归树 (NOTE: 暂时没有很懂它的一个执行逻辑)  
function fib(n: number): number {
  if (n === 1 || n === 2) return n - 1;
  const res = fib(n - 1) + fib(n - 2);
  return res;
}

console.log(fib(10));
