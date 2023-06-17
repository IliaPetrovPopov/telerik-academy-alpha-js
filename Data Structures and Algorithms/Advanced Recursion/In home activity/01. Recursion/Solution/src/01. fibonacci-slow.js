const fibonacciSlow = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonacciSlow(n - 1) + fibonacciSlow(n - 2);
};

console.log(fibonacciSlow(8));
