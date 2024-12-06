// 1. Lấy thông tin từ form
const loginForm = document.getElementById("login-form");
console.log(loginForm);

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // .value: lấy giá trị người dùng nhập vào
  // .trim(): loại bỏ đi khoảng trắng
  const userName = document.getElementById("userName").value.trim();
  const password = document.getElementById("password").value.trim();

  console.log(userName, password);
});

// 2. Chỉnh màu nền cho đoạn văn bản
const text = document.getElementById("text");
text.style.backgroundColor = "green";
text.style.color = "white";

// 3. Hiển thị nội dung các mục của danh sách thả xuống
const color = document.getElementById("color");
console.log(color);
const option = color.options;
console.log(option);
for (let i = 0; i < option.length; i++) {
  console.log(option[i].text);
}
