// Check if s2 contains a permutation of s1 (Sliding Window)
const checkPermutation = function (s1, s2) {
    const len1 = s1.length,
        len2 = s2.length;
    if (len1 > len2) return false;
    const count = Array(26).fill(0);
    for (let i = 0; i < len1; i++) {
        count[s1.charCodeAt(i) - 97]++;
        count[s2.charCodeAt(i) - 97]--;
    }
    if (!count.some((e) => e !== 0)) return true;
    for (let i = len1; i < len2; i++) {
        count[s2.charCodeAt(i) - 97]--;
        count[s2.charCodeAt(i - len1) - 97]++;
        if (!count.some((e) => e !== 0)) return true;
    }
    return false;
};

// Find missing number in array
const find_missing = function (input) {
    let n = input.length + 1;
    let sum = 0;
    for (let i in input) {
        sum += input[i];
    }
    return Math.floor((n * (n + 1)) / 2) - sum;
};

// Integer to Words conversion
const numberToWords = function (num) {
    let result = toHundreds(num % 1000);
    const bigNumbers = ["Thousand", "Million", "Billion"];
    for (let i = 0; i < 3; ++i) {
        num = Math.trunc(num / 1000);
        result = num % 1000 !== 0 ? [toHundreds(num % 1000), bigNumbers[i], result].filter(Boolean).join(" ") : result;
    }
    return result.length === 0 ? "Zero" : result;
};

function toHundreds(num) {
    const numbers = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
        "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const result = Array(3).fill("");
    let a = Math.trunc(num / 100), b = num % 100, c = num % 10;
    result[0] = a > 0 && `${numbers[a]} Hundred`;
    result[1] = b < 20 ? numbers[b] : tens[Math.trunc(b / 10)];
    result[2] = b >= 20 && `${numbers[c]}`;
    return result.filter(Boolean).join(" ");
}

// Reverse Integer (with overflow check)
const reverse = function (num) {
    let result = 0;
    while (num !== 0) {
        result = result * 10 + num % 10;
        num = Math.trunc(num / 10);
    }
    if (result > 2 ** 31 || result < -(2 ** 31)) return 0;
    return result;
};

// Array permutation
const permute = function (nums) {
    let results = [];
    let go = (current) => {
        if (current.length === nums.length) {
            results.push(current);
            return;
        }
        nums.forEach((n) => {
            if (!current.includes(n)) {
                go([...current, n]);
            }
        });
    };
    go([]);
    return results;
};

// Custom Map implementation
const selfMap = function (fn, context) {
    let arr = Array.prototype.slice.call(this);
    let mappedArr = Array();
    for (let i = 0; i < arr.length; i++) {
        if (!arr.hasOwnProperty(i)) continue;
        mappedArr[i] = fn.call(context, arr[i], i, this);
    }
    return mappedArr;
};