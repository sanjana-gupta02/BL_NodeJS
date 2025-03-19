function getRandomBirthMonth() {
    return Math.floor(Math.random() * 12) + 1; 
}

let birthMonthMap = new Map();

for (let month = 1; month <= 12; month++) {
    birthMonthMap.set(month, []);
}


for (let i = 1; i <= 50; i++) {
    let birthMonth = getRandomBirthMonth();
    birthMonthMap.get(birthMonth).push(`Person ${i}`);
}


console.log("Individuals grouped by birth month:");
for (let [month, individuals] of birthMonthMap.entries()) {
    if (individuals.length > 0) {
        console.log(`Month ${month}: ${individuals.length} individuals ->`, individuals);
    }
}
