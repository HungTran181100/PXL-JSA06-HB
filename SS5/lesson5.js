// Function --------------------------------
Hello();

// Hàm có giá trị trả về
function dienTichHCN(chieuDai, chieuRong) {
  return chieuDai * chieuRong;
}

//Hàm không có giá trị trả về
function Hello() {
  console.log("Hello World");
}

let a = 50;
let b = 10;
let result = dienTichHCN(a, b);
console.log(result);
Hello();

// LocalStorage -----------------------------------
// setItem(key, value) -> thêm khóa và giá trị vào LS
localStorage.setItem("userName", "Hung");
localStorage.setItem("number", 123);

// getItem(key) -> Tìm kiếm giá trị dựa vào key
let getNumber = localStorage.getItem("number");
console.log(123);
console.log(getNumber);

let arr = [1, 2, 3, 4, 5];
// JSON.stringify(arr): Chuyển đổi kiểu dữ liệu từ array sang string
localStorage.setItem("ARRAY", JSON.stringify(arr));

console.log(arr);
// Chuyển đổi từ string -> kiểu dữ liệu gốc
console.log(JSON.parse(localStorage.getItem("ARRAY")));
const text = document.getElementById("text");
text.innerHTML = JSON.parse(localStorage.getItem("ARRAY"));

// Xóa cặp key-value trong LS
localStorage.removeItem("number");
// Xóa tất cả cặp key-value trong LS
//localStorage.clear();
