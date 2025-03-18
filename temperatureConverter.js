const conversionType = process.argv[2]; 
const temperature = parseFloat(process.argv[3]);

switch (conversionType) {
    case "CtoF":
        if (temperature >= 0 && temperature <= 100) {
            let degF = (temperature * 9/5) + 32;
            console.log(`${temperature}°C = ${degF.toFixed(2)}°F`);
        } else {
            console.log("Temperature out of range! Enter between 0°C and 100°C.");
        }
        break;
    
    case "FtoC":
        if (temperature >= 32 && temperature <= 212) {
            let degC = (temperature - 32) * 5/9;
            console.log(`${temperature}°F = ${degC.toFixed(2)}°C`);
        } else {
            console.log("Temperature out of range! Enter between 32°F and 212°F.");
        }
        break;

    default:
        console.log("Invalid selection! Use 'CtoF' for Celsius to Fahrenheit or 'FtoC' for Fahrenheit to Celsius.");
}
