let inches = 42;
let feet = inches / 12; 
console.log("42 inches = " + feet + " feet");

let lengthFeet = 60;
let widthFeet = 40;
let lengthMeters = (lengthFeet * 3048) / 10000; 
let widthMeters = (widthFeet * 3048) / 10000;
console.log("Rectangular Plot: " + lengthMeters + " m x " + widthMeters + " m");

let areaPerPlot = lengthMeters * widthMeters; 
let totalAreaMeters = areaPerPlot * 25; 
let totalAreaAcres = (totalAreaMeters * 100) / 404686; 
console.log("Total area of 25 plots = " + totalAreaAcres + " acres");
