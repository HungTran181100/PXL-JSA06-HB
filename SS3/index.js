let a = 0 / 0; //NaN: not a number
console.log(a);

let n = 10 % 3; // Chia lấy dư
console.log(n);

let b = 5;
b += 10;
//b = b + 10
// Giá trị mới = giá trị cũ + 10
let c = 10;
c += 20;
c += 10;
console.log(c);
// console.log(b);

let x = 10;
let y = 5;
// So sánh bằng
console.log(x == y);
// So sánh khác
console.log(x != y);
// So sánh bằng nghiêm ngặt
console.log(x === y);
// So sánh khác nghiêm ngặt
console.log(x !== y);
// So sánh lớn
console.log(x > y);
// So sánh bé
console.log(x < y);
// So sánh lớn hơn hoặc bằng
console.log(x >= y);
// So sánh bé hơn hoặc bằng
console.log(x <= y);

// Câu điều kiện
// Câu điều kiện dạng thiếu
if (x > y) {
  console.log("Giá trị x lớn hơn");
}
// Câu điều kiện dạng đủ
if (x > y) {
  console.log("Giá trị x lớn hơn");
} else {
  console.log("Giá trị x bé hơn");
}
// Câu điều kiện dạng đa nhánh
if (x > y) {
  console.log("Giá trị x lớn hơn");
} else if (x != y) {
  console.log("Giá trị x khác y");
} else if (x == y) {
  console.log("Giá trị x bằng y");
} else {
  console.log("...");
}

// Toán tử logic
num1 = -20;
num2 = 15;
num3 = 20;
//Toán tử và &&
if (num1 == num3 && num2 == num3) {
  console.log("Num1 và Num2 bằng Num3");
}
// Toán tử hoặc ||
if (num1 == num3 || num2 == num3) {
  console.log("Num1 hoặc num2 bằng num3");
}
// Toán tử khác !
console.log(!(num1 == num3));

//Vòng lặp For
// i: biến số đếm
// i <= 50: điều kiện để dừng vòng lặp
// i++: sau mỗi vòng lặp tăng i lên 1
for (let i = 0; i <= 50; i++) {
  console.log(i);
}

// Vòng lặp while
let i = 1;
while (i <= 50) {
  console.log(i);
  i++;
}

// Vòng lặp do while
let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);

// Câu lệnh promt dùng để cho người dùng nhập vào một số hoặc một ký tự từ bàn phím
let userInput = prompt("Nhập vào một số nguyên");
console.log(userInput);

// alert là câu lệnh hiển thị thông báo lên web của mình
if (userInput == "hung") {
  alert("Thông báo người dùng đã nhập xong");
} else {
  alert("Thông báo vui lòng nhập lại");
}
