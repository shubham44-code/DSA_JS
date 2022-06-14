function factorial(n) {
  let fact = 1;

  for (let i = 2; i <= n; i++) {
    fact *= i;
  }

  return fact;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
