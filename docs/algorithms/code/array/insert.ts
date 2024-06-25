/**
 * @param {Array} nums 目标数组
 * @param {number} num 插入元素
 * @param {number} index 插入索引位置
 * @returns {Array}
 */
function insert(nums: number[], num: number, index: number): number[] {
  for (let i = nums.length; i > index; i--) {
    nums[i] = nums[i - 1];
  }
  nums[index] = num;
  return nums;
}

console.log(insert([1, 2, 3, 4], 5, 2)); // [ 1, 2, 5, 3, 4 ]
