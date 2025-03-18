function displayPlaceValue(num) {
  if (num === 1) console.log("Unit");
  else if (num === 10) console.log("Ten");
  else if (num === 100) console.log("Hundred");
  else if (num === 1000) console.log("Thousand");
  else if (num === 10000) console.log("Ten Thousand");
  else console.log("Invalid input, enter numbers like 1, 10, 100, 1000...");
}

displayPlaceValue(100); 
