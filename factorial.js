const n = parseInt(process.argv[2]);  
let fact = 1;  

for (let i = 2; i <= n; i++) {  
    fact *= i;  
}

console.log(`Factorial: ${fact}`);
