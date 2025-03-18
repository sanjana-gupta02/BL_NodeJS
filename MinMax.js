let a = Math.floor(100 + Math.random() * 900);
let b = Math.floor(100 + Math.random() * 900);
let c = Math.floor(100 + Math.random() * 900);
let d = Math.floor(100 + Math.random() * 900);
let e = Math.floor(100 + Math.random() * 900);

let min = a;
if (b < min) min = b;
if (c < min) min = c;
if (d < min) min = d;
if (e < min) min = e;

let max = a;
if (b > max) max = b;
if (c > max) max = c;
if (d > max) max = d;
if (e > max) max = e;

console.log("Numbers: ", a, b, c, d, e);
console.log("Minimum: ", min);
console.log("Maximum: ", max);
