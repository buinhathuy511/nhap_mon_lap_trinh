//cau 2: Nhập một dãy số nguyên dương n (n > 100000) vd 123123123
//a) Tìm và in ra số lớn nhất.
//b) Tìm và in ra số lớn thứ hai.
//c) Tìm và in ra số nhỏ nhất.
//d): Tìm và in ra tất cả các số nguyên tố trong dãy.

//a) Tìm và in ra số lớn nhất.
function findMaxNumber(number) {
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

//b) Tìm và in ra số lớn thứ hai.
function findSecondMaxNumberNumber(number) {
  let maxNumber = -1;
  let secondMaxNumber = -1;
  while (number > 0) {
    let remainder = number % 10;
    if (remainder > maxNumber) {
      secondMaxNumber = maxNumber;
      maxNumber = remainder;
    } else if (remainder > secondMaxNumber && remainder < maxNumber) {
      secondMaxNumber = remainder;
    }
    number = Math.floor(number / 10);
  }
  return secondMaxNumber;
}
console.log(findSecondMaxNumberNumber(632785));

//c) Tìm và in ra số nhỏ nhất.
function findMinNumber(number) {
  let min = 9;
  while (number > 0) {
    let remainder = number % 10;
    if (min > remainder) {
      min = remainder;
    }
    number = Math.floor(number / 10);
  }
  return min;
}
console.log(findMinNumber(364654894630023317987));

//d): Tìm và in ra tất cả các số nguyên tố trong dãy.
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function findPrimeNumber(array) {
  let primes = [];
  let index = 0;

  for (let i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
      primes[index] = array[i];
      index++;
    }
  }

  return primes;
}
console.log(findPrimeNumber([5, 2, 4, 10, 3, 4, 2, 15, 69, 4])); // [5, 2, 3, 2]
