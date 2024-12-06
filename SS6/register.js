const register = document.getElementById("register");

register.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = document.getElementById("userName").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = {
    userName: userName,
    password: password,
  };
  console.log(user);
  localStorage.setItem("user", JSON.stringify(user));
});
