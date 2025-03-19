function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

let dieRolls = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]);

let maxCount = 10;
let reachedMax = false;

while (!reachedMax) {
    let roll = rollDie();
    dieRolls.set(roll, dieRolls.get(roll) + 1);
    
    if (dieRolls.get(roll) === maxCount) {
        reachedMax = true;
    }
}

let maxNumber = [...dieRolls.entries()].reduce((a, b) => (a[1] > b[1] ? a : b));
let minNumber = [...dieRolls.entries()].reduce((a, b) => (a[1] < b[1] ? a : b));

console.log("Die Roll Results:", Object.fromEntries(dieRolls));
console.log("Number that appeared maximum times:", maxNumber[0], "with", maxNumber[1], "occurrences");
console.log("Number that appeared minimum times:", minNumber[0], "with", minNumber[1], "occurrences");
