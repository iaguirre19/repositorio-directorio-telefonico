

const inputModal = document.querySelectorAll(".input-modal");
const btnSaveNewUser = document.querySelector("#btnModalForm");
// const uploadInput = document.getElementById("userProfilePicture");
// const contentImg = document.querySelector(".content-img");
const cancel = document.querySelector(".cancel")
const input = document.getElementById("profile-img");
const image = document.getElementById("profileImage");

const usersArray = [];

evenstListeners();
function evenstListeners(){
  btnSaveNewUser.addEventListener("click", getInfUser);
}



function getInfUser(e) {
  e.preventDefault();

  const newUser = {};

  inputModal.forEach((input) => {
    newUser[input.id] = input.value;
    input.value = "";
  });
  image.src = "";
  image.style.opacity = '0';
  usersArray.push(newUser);
  console.log(usersArray);
}




input.addEventListener("change", function () {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      image.src = e.target.result;
      image.style.opacity = '1';
    };
    reader.readAsDataURL(file);
  }
});






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

function validateInput() {
  inputModal.forEach((input) => {
    input.addEventListener("focus", () => handleInputFocus(input));
    input.addEventListener("blur", () => handleInputBlur(input));
  });
}

validateInput();














