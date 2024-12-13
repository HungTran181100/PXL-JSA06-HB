const user = JSON.parse(localStorage.getItem("user"));
console.log(user);
console.log(user.userName);
console.log(user.password);

const loginForm = document.getElementById("login");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = document.getElementById("userName").value.trim();
  const password = document.getElementById("password").value.trim();

  if (userName === user.userName && password === user.password) {
    alert("Đăng nhập thành công");
    window.location.href = "index.html";
  } else {
    alert("Đăng nhập thất bại");
  }
});
