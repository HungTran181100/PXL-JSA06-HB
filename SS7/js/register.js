const register = document.getElementById("register");

register.addEventListener("submit", (event) => {
  event.preventDefault();
  const userName = document.getElementById("userName").value.trim();
  const password = document.getElementById("password").value.trim();
  const email = document.getElementById("email").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();

  console.log(userName);
  console.log(password);
  console.log(email);

  if (userName.length >= 6 && userName.length <= 18) {
    if (password.length >= 8 && password.length <= 20) {
      if (password === confirmPassword) {
        const user = {
          userName: userName,
          email: email,
          password: password,
        };
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user));
      }
    }
  }
});
