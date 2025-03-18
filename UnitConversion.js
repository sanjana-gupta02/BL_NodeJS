function unitConversion(option, value) {
  switch (option) {
    case 1:
      console.log(value + " Feet = " + value * 12 + " Inches");
      break;
    case 2:
      console.log(value + " Feet = " + value * 0.3048 + " Meters");
      break;
    case 3:
      console.log(value + " Inches = " + value / 12 + " Feet");
      break;
    case 4:
      console.log(value + " Meters = " + value / 0.3048 + " Feet");
      break;
    default:
      console.log("Invalid option. Choose 1-4.");
  }
}


unitConversion(1, 5); 
unitConversion(3, 24); 
