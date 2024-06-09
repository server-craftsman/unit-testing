// import { fizzBuzz, max } from "../src/intro";
// import { longestIncreasingSubsequence, uniquePaths, maxProfit, isPalindrome, coinChange } from "../src/complex";

// Hàm 1: Tìm dãy con tăng dài nhất trong mảng
export function longestIncreasingSubsequence(arr) {
    // Nếu mảng rỗng, trả về 0
    if (arr.length === 0) return 0;

    // Khởi tạo mảng lis với độ dài bằng độ dài của mảng arr, tất cả phần tử đều là 1
    const lis = Array(arr.length).fill(1);

    // Duyệt qua từng phần tử trong mảng arr
    for (let i = 1; i < arr.length; i++) {
        // Duyệt qua các phần tử từ 0 đến i
        for (let j = 0; j < i; j++) {
            // Nếu phần tử thứ i lớn hơn phần tử thứ j và lis[i] nhỏ hơn lis[j] + 1
            if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
                // Cập nhật lis[i] = lis[j] + 1
                lis[i] = lis[j] + 1;
            }
        }
    }

    // Trả về giá trị lớn nhất trong mảng lis
    return Math.max(...lis);
}

// Hàm 2: Tính số lượng đường đi duy nhất trong một lưới
export function uniquePaths(m, n) {
    // Khởi tạo mảng dp kích thước m x n, tất cả phần tử đều là 1
    const dp = Array(m).fill(0).map(() => Array(n).fill(1));

    // Duyệt qua từng hàng từ 1 đến m
    for (let i = 1; i < m; i++) {
        // Duyệt qua từng cột từ 1 đến n
        for (let j = 1; j < n; j++) {
            // Cập nhật dp[i][j] bằng tổng của dp[i - 1][j] và dp[i][j - 1]
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    // Trả về giá trị dp[m - 1][n - 1]
    return dp[m - 1][n - 1];
}

// Hàm 3: Tính lợi nhuận tối đa từ giá cổ phiếu
export function maxProfit(prices) {
    // Khởi tạo giá trị giá thấp nhất là Infinity và lợi nhuận lớn nhất là 0
    let minPrice = Infinity;
    let maxProfit = 0;

    // Duyệt qua từng giá cổ phiếu
    for (let price of prices) {
        // Nếu giá cổ phiếu nhỏ hơn giá thấp nhất hiện tại
        if (price < minPrice) {
            // Cập nhật giá thấp nhất
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            // Nếu lợi nhuận từ giá cổ phiếu hiện tại lớn hơn lợi nhuận lớn nhất
            // Cập nhật lợi nhuận lớn nhất
            maxProfit = price - minPrice;
        }
    }

    // Trả về lợi nhuận lớn nhất
    return maxProfit;
}

// Hàm 4: Kiểm tra xâu có phải là palindrome (bỏ qua các ký tự không phải chữ hoặc số)
export function isPalindrome(s) {
    // Loại bỏ các ký tự không phải chữ hoặc số và chuyển thành chữ thường
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // So sánh xâu gốc với xâu đảo ngược của nó
    return cleaned === cleaned.split('').reverse().join('');
}

// Hàm 5: Tìm số lượng ít nhất các đồng xu để đạt được một số lượng nhất định
export function coinChange(coins, amount) {
    // Khởi tạo mảng dp kích thước amount + 1, tất cả các phần tử đều là Infinity
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    // Duyệt qua từng đồng xu trong mảng coins
    for (let coin of coins) {
        // Duyệt qua từng giá trị từ coin đến amount
        for (let i = coin; i <= amount; i++) {
            // Cập nhật dp[i] bằng giá trị nhỏ nhất của (dp[i] và dp[i - coin] + 1)
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    // Nếu dp[amount] là Infinity, trả về -1, ngược lại trả về dp[amount]
    return dp[amount] === Infinity ? -1 : dp[amount];
}