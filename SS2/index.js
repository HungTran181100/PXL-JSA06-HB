console.log("Hello");

// Cách khai báo biến
let a = 1; // Sử dụng nhiều
var b = 2;
const c = 3;
{
  // c = 3 + 3;
  a = 1 + 1;
  b = 1 + 2;

  let d = 0;
  console.log(a, b);
  console.log(a);
}
//console.log(d);

// Kiểu dữ liệu
let num = 10; // Number (Int)
let numFloat = 10.5; // Number (Float)
let chuoi = "Đây là một chuỗi"; // String
let boolTrue = true; // Boolean (True)
let boolFalse = false; // Boolean (False)

// Khai báo 3 biến về bản thân sử dụng
// 3 kiểu dữ liệu trên
let name = "Hung";
let age = 20;
let music = true;
console.log(name, age, music);

// Cách đặt tên biến:
let tenCuaLong = "Long";

// ---------------Thao tác với chuỗi --------------------------------

let hello = "           Hello            ";
let helloSplit = hello.split(" ");
console.log(helloSplit);
let world = "World";
let fruit = "táo,chuối,nho";
let text = "hello khang";
let text2 = "HELLO LONG";
// Gộp chuỗi
let final = hello + " " + world;
// Đếm số ký tự trong chuỗi
let lenHello = hello.length;
// Tách chuỗi
let fruitSplit = fruit.split(",");
// Viết hoa chuỗi
let textupper = text.toLocaleUpperCase();
// Viết thường chuỗi
let textLower = text2.toLocaleLowerCase();
// Loại bỏ khoảng trắng trong chuỗi
hello = hello.trim();
let helloTrimmed = hello.split(" ");

console.log(final); // In ra chuỗi Hello World đã gộp
console.log(hello[1]); // In ra chữ e trong Hello
console.log("Độ dài của chữ hello là:", lenHello);
console.log(fruitSplit);
console.log(textupper);
console.log(textLower);
console.log(helloTrimmed);

// Bài tập:
// Cho một chuỗi: let chuoi = "Hưng Long Khang Minh"
// In ra số từ trong chuoi (4)

let text3 = "Hưng Long Khang Minh          ";
// Loại bỏ các khoảng trắng
text3 = text3.trim();
// Tách chuỗi
text3 = text3.split(" ");
// Đến số từ trong chuỗi
text3 = text3.length;
console.log("Số từ trong chuỗi text3:", text3);
