const start = parseInt(process.argv[2]);  
const end = parseInt(process.argv[3]);  

for (let n = start; n <= end; n++) {  
    let isPrime = n > 1;  
    for (let i = 2; i * i <= n; i++) {  
        if (n % i === 0) {  
            isPrime = false;  
            break;  
        }  
    }  
    if (isPrime) console.log(n);  
}
