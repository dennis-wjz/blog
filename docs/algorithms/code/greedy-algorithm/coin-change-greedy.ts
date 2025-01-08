// 贪心算法
function coinChangeGreedy(coins: number[], amount: number): number {
  let count = 0;
  for (let i = coins.length - 1; i >= 0; i--) {
    const coin = coins[i];
    while (amount >= coin) {
      amount -= coin;
      count++;
    }
  }
  return count;
}

// /* 零钱兑换：贪心 */
function coinChangeGreedy1(coins: number[], amt: number): number {
  // 假设 coins 数组有序
  let i = coins.length - 1;
  let count = 0;
  // 循环进行贪心选择，直到无剩余金额
  while (amt > 0) {
      // 找到小于且最接近剩余金额的硬币
      while (i > 0 && coins[i] > amt) {
          i--;
      }
      // 选择 coins[i]
      amt -= coins[i];
      count++;
  }
  // 若未找到可行方案，则返回 -1
  return amt === 0 ? count : -1;
}

// 示例测试
const coins = [1, 5, 10, 25]; // 硬币面值
const amount = 63; // 目标金额

const result = coinChangeGreedy1(coins, amount);
console.log(result); // 输出：6 (25 + 25 + 10 + 1 + 1 + 1)