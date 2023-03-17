const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const buttonSubmit = document.getElementById("submit");

const divEmail = document.getElementById("errEmail");
const divPassword = document.getElementById("errPassword");

const divErr = document.querySelectorAll(".error");

buttonSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  buttonSubmit.classList.add("loading");

  var errEmail = "";
  var errPassword = "";

  const emailValue = inputEmail.value;
  const passValue = inputPassword.value;

  var result = 1;

  divEmail.style.display = "none";
  divPassword.style.display = "none";
  inputEmail.style.border = "1px solid var(--outline)";
  inputPassword.style.border = "1px solid var(--outline)";

  if (!emailValue.includes("@gmail.com")) {
    result = 0;
    errEmail += "Please Input a valid email";
    divEmail.innerHTML = errEmail;
  }

  if (passValue.length < 8) {
    result = 0;
    errPassword += "Minimum 8 characters";
    divPassword.innerHTML = errPassword;
  }

  setTimeout(() => {
    buttonSubmit.classList.remove("loading");
    if (result === 1) {
      window.location.href = "index.html";
    } else {
      divEmail.style.display = "block";
      inputEmail.style.border = "1px solid rgb(255, 86, 86)";
      divPassword.style.display = "block";
      inputPassword.style.border = "1px solid rgb(255, 86, 86)";
    }
  }, 1200);

});
