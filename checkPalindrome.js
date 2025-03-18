function isPalindrome(num) {
    let str = num.toString();
    return str === str.split('').reverse().join('');
}

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

console.log(`Numbers are Palindromes: ${isPalindrome(num1) && isPalindrome(num2)}`);
