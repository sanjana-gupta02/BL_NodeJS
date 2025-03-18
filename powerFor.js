const n = parseInt(process.argv[2]);  
let power = 1;  

for (let i = 0; i <= n; i++) {  
    console.log(`2^${i} = ${power}`);  
    power *= 2;  
}
