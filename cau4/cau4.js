//cau 4: Nhập một chuỗi ký tự:
// a) Đảo ngược chuỗi.
// b) Xóa khoảng trắng trong chuỗi.
// c) Kiểm tra chuỗi đối xứng.
// d) Tìm dãy con đối xứng dài nhất.

//a) Đảo ngược chuỗi.
function reverseString(string) {
  let reverseString = "";
  for (let i = 0; i < string.length; i++) {
    reverseString = string[i] + reverseString;
  }
  return reverseString;
}
console.log(reverseString("buinhathuy"));

//b)  Xóa khoảng trắng trong chuỗi.
function removeSpace(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      newString += string[i];
    }
  }
  return newString;
}
console.log(removeSpace("bui nhat huy"));

//c) Kiểm tra chuỗi đối xứng.
function checkPalindromeString(string) {
  let lastString = string.length - 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[lastString]) {
      return false;
    }
    lastString--;
  }
  return true;
}
console.log(checkPalindromeString("abcdcbaa")); //false
console.log(checkPalindromeString("abcdcba")); //true
