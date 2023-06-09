
const inputModal = document.querySelectorAll(".input-modal");
const btnSaveNewUser = document.querySelector("#btnModalForm");
const input = document.getElementById("profile-img");
const image = document.getElementById("profileImage");
const btnNewUser = document.querySelector(".content_add");
const background = document.querySelector(".background-modal");
const newUserModal = document.querySelector(".add_newuser-modal");
const cancel = document.querySelector(".cancel");

btnSaveNewUser.addEventListener("click", handleSaveNewUser);
input.addEventListener("change", handleImageUpload);
btnNewUser.addEventListener("click", showNewUserModal);
cancel.addEventListener("click", closeModalForm);

function showNewUserModal(e) {
  e.preventDefault();
  newUserModal.classList.add("active-modal");
  background.classList.add("active-modal");
  background.addEventListener("click", closeModal);
}

function closeModalForm() {
  clearProfilePicture();

  inputModal.forEach((input) => {
    clearInputField(input);
    validateInputBackground(input);
  });

  newUserModal.classList.remove("active-modal");
  background.classList.remove("active-modal");
}

function closeModal(e) {
  if (e.target === background) {
    newUserModal.classList.remove("active-modal");
    background.classList.remove("active-modal");
  }
}

const usersArray = [];

function clearInputField(input) {
  input.value = "";
}

function clearProfilePicture() {
  image.src = "";
  image.style.opacity = "0";
}

function captureUserData() {
  const newUser = {};

  inputModal.forEach((input) => {
    newUser[input.id] = input.value;
    clearInputField(input);
    validateInputBackground(input);
  });

  return newUser;
}

function addUserToArray(user) {
  usersArray.push(user);
  console.log(usersArray);
}

function handleSaveNewUser(e) {
  e.preventDefault();

  const user = captureUserData();
  clearProfilePicture();
  addUserToArray(user);
}

function handleImageUpload() {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      image.src = e.target.result;
      image.style.opacity = "1";
    };
    reader.readAsDataURL(file);
  }
}

function handleInputFocus(input) {
  input.parentElement.classList.add("active");
}

function handleInputBlur(input) {
  const parentElement = input.parentElement;
  parentElement.classList.remove("active", "active-error");
  if (!input.validity.valid) {
    parentElement.classList.add("active-error");
  } else {
    parentElement.classList.add("active");
  }
}

function validateInputBackground(input) {
  if (input.parentElement.classList.contains("active")) {
    input.parentElement.classList.remove("active");
  }
}

function validateInputFields() {
  inputModal.forEach((input) => {
    input.addEventListener("focus", () => handleInputFocus(input));
    input.addEventListener("blur", () => handleInputBlur(input));
  });
}

validateInputFields();














