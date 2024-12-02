// cau 10: Nhập hai số nguyên dương a và b:
//a) Tìm ước chung lớn nhất.
//b) Tìm bội chung nhỏ nhất.

//a) Tìm ước chung lớn nhất.
function findGreatestCommonDivisor(a, b) {
  for (let i = a; i > 0; i--) {
    for (let j = b; j > 0; j--) {
      if (a % i === 0 && b % j === 0 && i === j) {
        return i;
      }
    }
  }
}
console.log(findGreatestCommonDivisor(20, 15)); // 5

//b) Tìm bội chung nhỏ nhất.
function findLeastCommonMultiple(a, b) {
  for (let i = a; i <= a * b; i++) {
    if (i % a === 0 && i % b === 0) {
      return i;
    }
  }
}
console.log(findLeastCommonMultiple(6, 10)); // 30
