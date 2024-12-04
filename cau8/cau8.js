//cau 8: Nhập một chuỗi ký tự:
//a) Đếm số nguyên âm.
//b) Đếm số lần xuất hiện của một ký tự.
//c) Tìm ký tự xuất hiện nhiều nhất.

//a) Đếm số nguyên âm.
function countVowels(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("buinhathuy")); //4

//b) Đếm số lần xuất hien của một ký tự.
function countCharacter(string, character) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++;
    }
  }
  return count;
}

// c) Tìm ký tự xuất hiện nhiều nhất.
function mostFrequentCharacter(string) {
  let maxCharacter = "";
  let maxCount = 0;

  // Duyet qua tung ky tu trong chuoi
  for (let i = 0; i < string.length; i++) {
    let count = 0;
    // Dem so lan ky tu string[i] xuat hien trong chuoi
    for (let j = 0; j < string.length; j++) {
      if (string[i] === string[j]) {
        count++;
      }
    }

    // Cap nhat ky tu xuat hien nhieu nhat
    if (count > maxCount) {
      maxCount = count;
      maxCharacter = string[i];
    }
  }
  return maxCharacter;
}
console.log(mostFrequentCharacter("ahihihii")); //i
