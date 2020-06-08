/**
 * 1. 两数之和
 * url：https://leetcode-cn.com/problems/two-sum/
 * 核心点：数组、哈希表
 * 核心思路：一次遍历，寻找差值下标是否存在
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 保存对应的数字和其下标
    let diffs = {};
    // 缓存数组长度
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        // 如果目标数字与当前数字的差值在diffs中有下标，即表示命中，则返回对应的两个下标即可
        if (diffs[target - nums[i]] !== undefined) {
            return [diffs[target - nums[i]], i]
        }
        // 否则将遍历的数字和其下标保存起来
        diffs[nums[i]] = i;
    }
};