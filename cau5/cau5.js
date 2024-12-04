//cau 5: Nhập một mảng số nguyên. Sắp xếp và in ra
function sortArray(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
console.log(sortArray([5, 6, 1, 2, 4, 7, 8]));
