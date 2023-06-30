import { loginValidation } from "./api/loginAcces.js";

const inputsForms = document.querySelectorAll(".login-input");
const showPasswordIcon = document.querySelector("#showPassword");
const userLogin = document.querySelector("#userLogin");
const passwordLogin = document.querySelector("#passwordLogin");
const btnlogin = document.querySelector("#btnLogin");


// Ruta para subir la imagen desde el frontend al servidor
// app.post("/upload-image", upload.single("image"), register);

function createUser(emailInput, passwordInput) {
  
  const email = emailInput.value;
  const password = passwordInput.value;

  // console.log(email)
  
  let user = {
    email: email,
    password: password
  };

  return user;
}

btnlogin.addEventListener("click", (e) => {
  e.preventDefault();
  const user = createUser(userLogin, passwordLogin);
  // console.log(user)
  loginValidation(user);
});

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
};

showPasswordIcon.addEventListener('click', function() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordIcon.classList.remove('bx-show');
    showPasswordIcon.classList.add('bx-hide');
  } else {
    passwordInput.type = 'password';
    showPasswordIcon.classList.remove('bx-hide');
    showPasswordIcon.classList.add('bx-show');
  }
});

// 




