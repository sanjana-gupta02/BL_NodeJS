function getRandomThreeDigitNumber() {
    return Math.floor(100 + Math.random() * 900);
}

let numbers = Array.from({ length: 10 }, getRandomThreeDigitNumber);

console.log("Generated numbers:", numbers);

numbers.sort((a, b) => a - b);

console.log("Sorted numbers:", numbers);

let secondSmallest = numbers[1];
let secondLargest = numbers[numbers.length - 2];

console.log("Second Smallest:", secondSmallest);
console.log("Second Largest:", secondLargest);
