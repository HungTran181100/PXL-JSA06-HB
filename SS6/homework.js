// Bài 1:
function tinhTong(number) {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    result += i;
    // result = result + i
    console.log(i);
  }
  return result;
}
ket_qua = tinhTong(3);
console.log(ket_qua);
// Bài 2:
function soNguyenTo(num) {
  if (num < 2) {
    return false;
  }
  // Vòng lặp từ 2 -> number
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
  // number = 5
  // 2 -> 5
  // 5/2 -> Không
  // 5/3 -> Không
  // 5/4 -> Không
  // 5/5 -> hết
}

let nguyenTo = 10;
console.log(soNguyenTo(nguyenTo));
if (soNguyenTo(nguyenTo)) {
  console.log("Số", nguyenTo, "là số nguyên tố");
} else {
  console.log("Số", nguyenTo, "không phải là số nguyên tố");
}
