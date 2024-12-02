// cau 1: Nhập một số nguyên dương n (n<1000)
// a) Tính và in ra tổng từ 1 đến n.
// b) Tính tổng các ước số của n.
// c) Tính tổng các chữ số của n.
// d) Tìm chữ số lớn nhất của n.

// a) Tính và in ra tổng từ 1 đến n.
function totalNumber(number) {
  if (number < 0 || number > 1000) {
    return "Please enter a number less than 1000";
  }
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total = total + i;
  }
  return total;
}
console.log(totalNumber(5));

// b) Tính tổng các ước số của n.
function totalDivisorNumber(number) {
  if (number < 0 || number > 1000) {
    return "Please enter a number less than 1000";
  }
  let total = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      total += i;
    }
  }
  return total;
}
console.log(totalDivisorNumber(10));

// c) Tính tổng các chữ số của n.
function totalNumber(number) {
  if (number < 0 || number > 1000) {
    return "Please enter a number less than 1000";
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

// d) Tìm chữ số lớn nhất của n.
function findMaxNumber(number) {
  if (number < 0 || number > 1000) {
    return "Please enter a number less than 1000";
  }
  let maxNumber = 0;
  while (number > 0) {
    let digit = number % 10;
    if (digit > maxNumber) {
      maxNumber = digit;
    }
    number = Math.floor(number / 10);
  }
  return maxNumber;
}
console.log(findMaxNumber(159));
