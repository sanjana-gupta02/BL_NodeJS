const readline = require("readline").createInterface({ input: process.stdin, output: process.stdout });

let low = 1, high = 100, mid;

function findMagicNumber() {
    if (low === high) {
        console.log(`Magic Number is: ${low}`);
        readline.close();
        return;
    }
    mid = Math.floor((low + high) / 2);
    readline.question(`Is your number less than ${mid}? (yes/no): `, (answer) => {
        if (answer.toLowerCase() === "yes") high = mid - 1;
        else low = mid;
        findMagicNumber();
    });
}

console.log("Think of a number between 1 to 100");
findMagicNumber();
