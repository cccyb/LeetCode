/**
 * 70. 爬楼梯
 * url：https://leetcode-cn.com/problems/climbing-stairs/
 * 核心点：动态规划、斐波那契数列
 * 核心思路：climbs[n] = climbs[n-1] + climbs[n-2]
 * 
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let climbs = [];
    climbs[0] = 1;
    climbs[1] = 1;
    for (let i = 2; i <= n; i++) {
        climbs[i] = climbs[i - 1] + climbs[i - 2];
    }
    return climbs[n];
};