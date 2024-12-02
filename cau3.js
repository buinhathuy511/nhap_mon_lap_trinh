//cau 3: Nhập một số nguyên dương n:
// a) Kiểm tra n có phải là số nguyên tố.
// b) Kiểm tra n có phải là số hoàn hảo.
// c) Kiểm tra n có phải là số chính phương.
// d) In ra tất cả các số nguyên tố nhỏ hơn hoặc bằng n.

//a) Kiểm tra n có phải là số nguyên tố.
function checkPrimeNumber(number) {
  if (number <= 1) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  }
  return true;
}
console.log(checkPrimeNumber(16));

//b) Kiểm tra n có phải là số hoàn hảo.
function checkPerfectNumber(number) {
  let total = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      total += i;
    }
  }
  if (total === number) {
    return true;
  } else {
    return false;
  }
}
console.log(checkPerfectNumber(28));

//c) Kiểm tra n có phải là số chính phương.
function checkSquareNumber(number) {
  for (let i = 0; i < number; i++) {
    if (i * i === number) {
      return true;
    }
  }
  return false;
}
console.log(checkSquareNumber(16));

//d) In ra tất cả các số nguyên tố nhỏ hơn hoặc bằng n.
function printPrimeNumbers(number) {
  for (let i = 2; i <= number; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}
printPrimeNumbers(16);
