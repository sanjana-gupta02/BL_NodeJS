let money = 100, wins = 0, bets = 0;

while (money > 0 && money < 200) {
    bets++;
    if (Math.random() < 0.5) {
        money++;
        wins++;
    } else {
        money--;
    }
}

console.log(`Total Bets: ${bets}, Wins: ${wins}, Final Amount: Rs ${money}`);

