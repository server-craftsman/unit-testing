import { describe, it, expect } from "vitest";
import { fizzBuzz, max } from "../src/intro";
import { longestIncreasingSubsequence, uniquePaths, maxProfit, isPalindrome, coinChange } from "../src/complex";

describe('Complex Functions', () => {
    // Dữ liệu thử nghiệm cho hàm longestIncreasingSubsequence
    const testData_longestIncreasingSubsequence = [
        { input: [10, 9, 2, 5, 3, 7, 101, 18], expected: 4 },
        { input: [0, 1, 0, 3, 2, 3], expected: 4 },
        { input: [7, 7, 7, 7, 7, 7, 7], expected: 1 },
    ];

    // Dữ liệu thử nghiệm cho hàm uniquePaths
    const testData_uniquePaths = [
        { m: 3, n: 7, expected: 28 },
        { m: 3, n: 2, expected: 3 },
        { m: 7, n: 3, expected: 28 },
    ];

    // Dữ liệu thử nghiệm cho hàm maxProfit
    const testData_maxProfit = [
        { prices: [7, 1, 5, 3, 6, 4], expected: 5 },
        { prices: [7, 6, 4, 3, 1], expected: 0 },
        { prices: [1, 2], expected: 1 },
    ];

    // Dữ liệu thử nghiệm cho hàm isPalindrome
    const testData_isPalindrome = [
        { input: "A man, a plan, a canal: Panama", expected: true },
        { input: "race a car", expected: false },
        { input: "", expected: true },
    ];

    // Dữ liệu thử nghiệm cho hàm coinChange
    const testData_coinChange = [
        { coins: [1, 2, 5], amount: 11, expected: 3 },
        { coins: [2], amount: 3, expected: -1 },
        { coins: [1], amount: 0, expected: 0 },
    ];

    // Kiểm tra hàm longestIncreasingSubsequence với các dữ liệu thử nghiệm
    it.each(testData_longestIncreasingSubsequence)('longestIncreasingSubsequence should return the length of the longest increasing subsequence', ({ input, expected }) => {
        expect(longestIncreasingSubsequence(input)).toBe(expected);
    });

    // Kiểm tra hàm uniquePaths với các dữ liệu thử nghiệm
    it.each(testData_uniquePaths)('uniquePaths should return the number of unique paths in a grid', ({ m, n, expected }) => {
        expect(uniquePaths(m, n)).toBe(expected);
    });

    // Kiểm tra hàm maxProfit với các dữ liệu thử nghiệm
    it.each(testData_maxProfit)('maxProfit should return the maximum profit that can be achieved from the stock prices', ({ prices, expected }) => {
        expect(maxProfit(prices)).toBe(expected);
    });

    // Kiểm tra hàm isPalindrome với các dữ liệu thử nghiệm
    it.each(testData_isPalindrome)('isPalindrome should validate if a string is a palindrome', ({ input, expected }) => {
        expect(isPalindrome(input)).toBe(expected);
    });

    // Kiểm tra hàm coinChange với các dữ liệu thử nghiệm
    it.each(testData_coinChange)('coinChange should return the minimum number of coins needed to make the amount', ({ coins, amount, expected }) => {
        expect(coinChange(coins, amount)).toBe(expected);
    });

    // In ra số lượng testcase passed và failed
    // Tạo một mảng chứa thông tin về số lượng testcase passed và failed cho mỗi hàm
    const results = [
        { functionName: 'longestIncreasingSubsequence', passed: 0, failed: 0 },
        { functionName: 'uniquePaths', passed: 0, failed: 0 },
        { functionName: 'maxProfit', passed: 0, failed: 0 },
        { functionName: 'isPalindrome', passed: 0, failed: 0 },
        { functionName: 'coinChange', passed: 0, failed: 0 },
    ];

    // Đếm số lượng testcase passed và failed cho hàm longestIncreasingSubsequence
    testData_longestIncreasingSubsequence.forEach(({ input, expected }) => {
            const actual = longestIncreasingSubsequence(input);
            if (actual === expected) {
                results[0].passed++;
            } else {
                results[0].failed++;
            }
        });

        // Đếm số lượng testcase passed và failed cho hàm uniquePaths
        testData_uniquePaths.forEach(({ m, n, expected }) => {
            const actual = uniquePaths(m, n);
            if (actual === expected) {
                results[1].passed++;
            } else {
                results[1].failed++;
            }
        });

        // Đếm số lượng testcase passed và failed cho hàm maxProfit
        testData_maxProfit.forEach(({ prices, expected }) => {
            const actual = maxProfit(prices);
            if (actual === expected) {
                results[2].passed++;
            } else {
                results[2].failed++;
            }
        });

        // Đếm số lượng testcase passed và failed cho hàm isPalindrome
        testData_isPalindrome.forEach(({ input, expected }) => {
            const actual = isPalindrome(input);
            if (actual === expected) {
                results[3].passed++;
            } else {
                results[3].failed++;
            }
        });

        // Đếm số lượng testcase passed và failed cho hàm coinChange
        testData_coinChange.forEach(({ coins, amount, expected }) => {
            const actual = coinChange(coins, amount);
            if (actual === expected) {
                results[4].passed++;
            } else {
                results[4].failed++;
            }
        });

        // In ra bảng thống kê số lượng testcase passed và failed cho mỗi hàm
        console.log("Test Case Results:");
        console.table(results);
    });

// => Method basis
// describe('max', () => {
//     it('should return the maximum value between two numbers', () => {
//         expect(max(2, 1)).toBe(2);
//     });

//     it('should return the maximum value between two numbers', () => {
//         expect(max(1, 2)).toBe(2);
//     });

//     it('should return the first argument if arguments are equal', () => {
//         expect(max(1, 1)).toBe(1);
//     });
// });

// describe('fizzBuzz', () => {
//     it('should return FizzBuzz if arg is divisible by 3 and 5', () => {
//         expect(fizzBuzz(3)).toBe('Fizz');
//     })
// })


