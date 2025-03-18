function flipCoin() {
  let randomNumber = Math.random(); // Generates a random number between 0 and 1
  let result;

  if (randomNumber < 0.5) {
    result = "Heads";
  } else {
    result = "Tails";
  }

  console.log(result); // Print the result
}

flipCoin(); // Call the function to flip the coin
