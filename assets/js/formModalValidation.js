

const inputModal = document.querySelectorAll(".input-modal");
const btnSaveNewUser = document.querySelector("#btnModalForm");
const uploadInput = document.getElementById("userProfilePicture");
const contentImg = document.querySelector(".content-img");
const cancel = document.querySelector(".cancel")

const usersArray = [];

evenstListeners();
function evenstListeners(){
  btnSaveNewUser.addEventListener("click", getInfUser);
  uploadInput.addEventListener("change", uploadImage);
}



function getInfUser(e) {
  e.preventDefault();

  const newUser = {};

  inputModal.forEach((input) => {
    newUser[input.id] = input.value;
    input.value = "";
  });
  usersArray.push(newUser);
  console.log(usersArray);
}



// function uploadImage() {
//   const file = this.files[0];
//   if (file) {
//     const reader = new FileReader();

//     reader.addEventListener("load", function () {
//       const image = new Image();
//       image.src = reader.result;

//       contentImg.innerHTML = "";
//       contentImg.appendChild(image);

//       contentImg.classList.add("has-image");
//     });

//     reader.readAsDataURL(file);
//   } else {
//     // Si no se selecciona ningún archivo, limpiar la imagen existente
//     contentImg.innerHTML = "";
//     contentImg.classList.remove("has-image");
//   }
// };




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














