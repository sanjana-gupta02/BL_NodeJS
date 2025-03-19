function getRandomThreeDigitNumber() {
    return Math.floor(100 + Math.random() * 900);
}

function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
        
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }
    
    return { secondLargest, secondSmallest };
}

let numbers = Array.from({ length: 10 }, getRandomThreeDigitNumber);
let result = findSecondLargestAndSmallest(numbers);

console.log("Generated numbers:", numbers);
console.log("Second Largest:", result.secondLargest);
console.log("Second Smallest:", result.secondSmallest);
