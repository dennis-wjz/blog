// for循环 线性关系
function forLoop(n: number): number {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res += i;
  }
  return res;
}

console.log(forLoop(10));

// while循环（对比for循环的自由度更高，可以自由设置变量的遍历幅度）
function whileLoop(n: number): number {
  let i = 1;
  let res = 0;
  while (i <= n) {
    res += i;
    i++;
  }
  return res;
}

console.log(whileLoop(10));

// 嵌套循环 即多层循环嵌套，成平方关系
