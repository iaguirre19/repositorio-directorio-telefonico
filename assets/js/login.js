const inputsForms = document.querySelectorAll(".login-input");
const showPasswordIcon = document.querySelector("#showPassword");
const passwordInput = document.querySelector("#passwordLogin");
const loginInput = document.querySelector("#userLogin");
const btnLogin = document.querySelector("#btnLogin");

activeInputsOnClick();

function activeInputsOnClick() {
  inputsForms.forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.classList.add("active");
    });
    input.addEventListener("blur", () => {
      if (!input.validity.valid) {
        input.parentElement.classList.remove("active");
        input.parentElement.classList.add("active-error");
      } else {
        input.parentElement.classList.remove("active-error");
        input.parentElement.classList.add("active");
      }
    });
  });
}

const getLoginValues = (userName, password) => {
  const userNameValue = userName.value;
  const passwordValue = password.value;
  console.log(userNameValue);
  console.log(passwordValue);
};

showPasswordIcon.addEventListener("click", (e) => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordIcon.classList.remove("bx-show");
    showPasswordIcon.classList.add("bx-hide");
  } else {
    passwordInput.type = "password";
    showPasswordIcon.classList.remove("bx-hide");
    showPasswordIcon.classList.add("bx-show");
  }
});

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  getLoginValues(loginInput, passwordInput);
});
