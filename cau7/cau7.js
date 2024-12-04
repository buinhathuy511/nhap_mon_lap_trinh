//cau 7: Nhập một số nguyên dương n, in ra n số đầu tiên của dãy Fibonacci.

function fibonacciNumber(number) {
  if (number < 0) {
    return "Please enter a positive number";
  }
  let fibonacciArray = [0, 1];
  for (let i = 2; i < number; i++) {
    fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
  }
  return fibonacciArray;
}
console.log(fibonacciNumber(5));
