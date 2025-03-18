function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

const num = parseInt(process.argv[2]);

if (isPrime(num)) {
    let palindromeNum = getPalindrome(num);
    console.log(`Palindrome of ${num} is ${palindromeNum}`);
    console.log(`Is palindrome prime: ${isPrime(palindromeNum)}`);
} else {
    console.log(`${num} is not a prime number.`);
}
