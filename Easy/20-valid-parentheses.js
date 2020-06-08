/**
 * 20. 有效的括号
 * url：https://leetcode-cn.com/problems/valid-parentheses/
 * 核心点：栈、哈希表
 * 核心思路：思路大概是：遇到左括号，一律推入栈中，遇到右括号，将栈顶部元素拿出，如果不匹配则返回 false，如果匹配则继续循环。
 * ，
 */

/**
 * @param {string} s
 * @return {boolean}
 * switch case
 */
var isValid = function(s) {
    let arr = [];
    const len = s.length;
    // 如果数组长度不是偶数，则肯定不能匹配
    if (len % 2 !== 0) return false;
    for (let i = 0; i < len; i++) {
        let letter = s[i];
        switch (letter) {
            // 如果是左括号的情况，推入栈中
            case '(': 
            case '{':
            case '[': {
                arr.push(letter);
                break;
            }
            // 如果是右括号的情况，弹出栈顶的符号进行配对，如果不是一对，则不符合要求，返回false即可，否则继续
            case ')': {
                if (arr.pop() !== '(') return false;
                break;
            }
            case '}': {
                if (arr.pop() !== '{') return false;
                break;
            }
            case ']': {
                if (arr.pop() !== '[') return false;
                break;
            }
        }
    }
    // 如果数组最后空了，即所有都正确匹配到了，返回true
    return !arr.length;
};

/**
 * @param {string} s
 * @return {boolean}
 * 哈希表map
 */
var isValid = function(s) {
    let map = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    let stack = []
    const len = s.length;
    if (len % 2 !== 0) return false;
    for (let letter of s) {
        if (letter in map) {
            stack.push(letter);
        } else {
            if (letter !== map[stack.pop()]) return false;
        }
    }
    return !stack.length;
};