/**
 * @param {Array} nums 目标数组
 * @param {number} index 移除索引位置
 * @returns {Array}
 */
function remove(nums: number[], index: number): number[] {
  for (let i = index; i < nums.length - 1; i++) {
    nums[i] = nums[i + 1];
  }
  return nums;
}

console.log(remove([1, 2, 3, 4], 1)); // [ 1, 3, 4, 4 ]