//cau 11: Nhập một mảng 1 chiều số nguyên n:
//a) Tìm vị trí của số lớn nhất.
//b) Tìm vị trí của số nhỏ nhất.
//c) Tìm và in ra tổng các phần tử trong mảng.

//a) Tìm vị trí của số lớn nhất.
function findMaxPosition(array) {
  let max = array[0];
  let position = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      position = i;
    }
  }
  return `Số lớn nhất là: ${array[position]} ở vị trí thứ ${position}`;
}
console.log(findMaxPosition([6, 5, 1, 2, 3, 9, 4, 2])); // 5

//b) Tìm vị trí của số nhỏ nhất.
function findMinPosition(array) {
  let min = array[0];
  let position = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      position = i;
    }
  }
  return `Số nhỏ nhất là: ${array[position]} ở vị trí thứ ${position}`;
}
console.log(findMinPosition([6, 5, 1, 2, 3, 9, 4, 2])); // 2

//c) Tìm và in ra tổng các phần tử trong mảng.
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return `Tổng các phần tử trong mảng là: ${sum}`;
}
console.log(sumArray([6, 5, 1, 2, 3, 9, 4, 2])); // 32
