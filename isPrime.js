const n = parseInt(process.argv[2]);  
let isPrime = n > 1;  

for (let i = 2; i * i <= n; i++) {  
    if (n % i === 0) {  
        isPrime = false;  
        break;  
    }  
}

console.log(isPrime ? "Prime" : "Not Prime");
