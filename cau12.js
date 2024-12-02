//cau12: Nhập một mảng 2 chiều số nguyên:
//a) Tìm số lớn nhất trong mảng.
//b) Tìm số nhỏ nhất trong mảng.
//c) Tính tổng các phần tử trên hàng hoặc cột thứ k.
//d) Tìm và in ra tất cả các số nguyên tố trong mảng.

//a) Tìm số lớn nhất trong mảng.
function findMaxNumber(array) {
  let max = array[0][0];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] > max) {
        max = array[i][j];
      }
    }
  }
  return `Số lớn nhất trong mảng là: ${max}`;
}
console.log(
  findMaxNumber([
    [12, 7, 5],
    [11, 19, 3],
    [9, 8, 17],
  ])
);

//b) Tìm số nhỏ nhất trong mảng.
function findMinNumber(array) {
  let min = array[0][0];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] < min) {
        min = array[i][j];
      }
    }
  }
  return `Số nhỏ nhất trong mảng là: ${min}`;
}
console.log(
  findMinNumber([
    [12, 7, 5],
    [11, 19, 3],
    [9, 8, 17],
  ])
);

//c) Tính tổng các phần tử trên hàng hoặc cột thứ k.
function sumRowOrColumn(array, k, isRow = true) {
  let sum = 0;
  if (isRow) {
    // Tính tổng hàng thứ k
    for (let j = 0; j < array[k].length; j++) {
      sum += array[k][j];
    }
  } else {
    // Tính tổng cột thứ k
    for (let i = 0; i < array.length; i++) {
      sum += array[i][k];
    }
  }
  return sum;
}

// d) Tìm và in ra tất cả các số nguyên tố trong mảng
function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function findAllPrimes(array) {
  let primes = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (isPrime(array[i][j])) {
        primes.push(array[i][j]); // Add prime number to the list
      }
    }
  }
  return primes;
}
