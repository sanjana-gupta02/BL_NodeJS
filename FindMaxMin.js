function findMaxMin(a, b, c) {
  let op1 = a + b * c;
  let op2 = (a % b) + c;
  let op3 = c + a / b;
  let op4 = a * b + c;

  console.log("Results:");
  console.log("a + b * c =", op1);
  console.log("a % b + c =", op2);
  console.log("c + a / b =", op3);
  console.log("a * b + c =", op4);

  let max = op1,
    min = op1;

  if (op2 > max) max = op2;
  if (op3 > max) max = op3;
  if (op4 > max) max = op4;

  if (op2 < min) min = op2;
  if (op3 < min) min = op3;
  if (op4 < min) min = op4;

  console.log("Maximum Value:", max);
  console.log("Minimum Value:", min);
}

findMaxMin(3, 5, 2);
