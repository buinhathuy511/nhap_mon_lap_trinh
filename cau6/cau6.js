//cau 6: Nhập một số nguyên dương n:
//a) Tính và in ra giai thừa của n.
//b) Tính và in ra tổng các chữ số của n.

//a) Tính và in ra giai thừa của n.
function factorialNumber(number) {
  if (number < 0) {
    return "Please enter a positive number";
  }
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(factorialNumber(5));

//b) Tính và in ra tổng các chữ số của n.
function totalNumber(number) {
  if (number < 0) {
    return "Please enter a positive number";
  }
  let total = 0;
  while (number > 0) {
    let digit = number % 10;
    total += digit;
    number = Math.floor(number / 10);
  }
  return total;
}
console.log(totalNumber(456));
