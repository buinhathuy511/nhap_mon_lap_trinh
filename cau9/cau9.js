//cau 9: Nhập một chuỗi ký tự hoặc dãy số:
//a) Tìm dãy con tăng/giảm dài nhất.
//b) Sắp xếp ký tự theo thứ tự tăng/giảm và in ra.

//a.1) Tìm dãy con tăng dài nhất.
function findLongestIncreasingSubsequence(string) {
  let longest = "";
  let current = "";

  for (let i = 0; i < string.length; i++) {
    if (i === 0 || string[i] > string[i - 1]) {
      current += string[i];
    } else {
      if (current.length > longest.length) {
        longest = current;
      }
      current = string[i];
    }
  }

  if (current.length > longest.length) {
    longest = current;
  }
  return longest;
}
console.log(findLongestIncreasingSubsequence("abcdeabc")); // abcde

//a.2) Tìm dãy con giảm dài nhất.
function findLongestDecreasingSubsequence(string) {
  let longest = "";
  let current = "";

  for (let i = 0; i < string.length; i++) {
    if (i === 0 || string[i] < string[i - 1]) {
      current += string[i];
    } else {
      if (current.length > longest.length) {
        longest = current;
      }
      current = string[i];
    }
  }

  if (current.length > longest.length) {
    longest = current;
  }
  return longest;
}
console.log(findLongestDecreasingSubsequence("edcbabc")); // edcba

//b) Sắp xếp ký tự theo thứ tự tăng/giảm và in ra.
//b.1) Sắp xếp ký tự theo thứ tự tăng.
function sortIncreasing(string) {
  let array = string.split("");

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array.join("");
}
console.log(sortIncreasing("edcbabc")); // abbccde

//b.2) Sắp xếp ký tự theo thứ tự giảm.
function sortDecreasing(string) {
  let array = string.split("");

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array.join("");
}
console.log(sortDecreasing("edcbabc")); // edcbcba
