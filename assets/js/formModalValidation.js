

const inputModal = document.querySelectorAll(".input-modal");
const btnSaveNewUser = document.querySelector("#btnModalForm");
const cancel = document.querySelector(".cancel")
const input = document.getElementById("profile-img");
const image = document.getElementById("profileImage");

const usersArray = [];

evenstListeners();
function evenstListeners(){
  btnSaveNewUser.addEventListener("click", getInfUser);
  input.addEventListener("change", uploadImage);
  cancel.addEventListener("click", closeModalForm)
}
function clearFormInputs(input) {
  input.value = "";

}

function clearPictureModal(){
  image.src = "";
  image.style.opacity = '0';
}


function getInfUser(e) {
  e.preventDefault();

  const newUser = {};

  inputModal.forEach((input) => {
    newUser[input.id] = input.value;
    clearFormInputs(input);
    validateBackgroundInputs(input)
  });
  clearPictureModal();
  usersArray.push(newUser);
  console.log(usersArray);
}

function closeModalForm(){
  clearPictureModal()

}

function uploadImage() {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      image.src = e.target.result;
      image.style.opacity = '1';
    };
    reader.readAsDataURL(file);
  }
};


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

function validateBackgroundInputs(input){
  if(input.parentElement.classList.contains("active")){
    input.parentElement.classList.remove("active");
  }
}

function validateInput() {
  inputModal.forEach((input) => {
    input.addEventListener("focus", () => handleInputFocus(input));
    input.addEventListener("blur", () => handleInputBlur(input));
  });
}

validateInput();














