
const inputModal = document.querySelectorAll(".input-modal");
const btnSaveNewUser = document.querySelector("#btnModalForm");
const input = document.getElementById("profile-img");
const image = document.getElementById("profileImage");
const btnNewUser = document.querySelector(".content_add");
const background = document.querySelector(".background-modal");
const newUserModal = document.querySelector(".add_newuser-modal");
const cancel = document.querySelector(".cancel");
const errorMessage = document.querySelector(".error-message");





// btnSaveNewUser.addEventListener("click", handleSaveNewUser);
input.addEventListener("change", handleImageUpload);
btnNewUser.addEventListener("click", showNewUserModal);
// cancel.addEventListener("click", closeModalForm);

function showNewUserModal(e) {
  e.preventDefault();
  newUserModal.classList.add("active-modal");
  background.classList.add("active-modal");
  // background.addEventListener("click", closeModal);
}

// function closeModalForm() {
//   clearProfilePicture();

//   inputModal.forEach((input) => {
//     clearInputField(input);
//     validateInputBackground(input);
//   });

//   newUserModal.classList.remove("active-modal");
//   background.classList.remove("active-modal");
// }

// function closeModal(e) {
//   if (e.target === background) {
//     newUserModal.classList.remove("active-modal");
//     background.classList.remove("active-modal");
//   }
// }

// const usersArray = [];

// function clearInputField(input) {
//   input.value = "";
// }

// function clearProfilePicture() {
//   image.src = "";
//   image.style.opacity = "0";
// }


// function captureUserData() {
//   const newUser = {};

//   let isEmptyField = false;
//   inputModal.forEach((input) => {
//     newUser[input.id] = input.value;
    
//     if (input.value === "") {
//       isEmptyField = true;
//       input.parentElement.classList.add("active-error");
//       console.log(`El campo ${input.id} está vacío.`);
//       errorMessage.textContent = `Please enter a valid ${input.id}`
//     }else{
//       clearInputField(input);
//       validateInputBackground(input);
//       clearProfilePicture(input);
//     }
//   });

//   if (isEmptyField) {
//     return null;
//   }
//   // console.log(inputEmptys)
//   return newUser;
// }








// function captureUserData() {
//   const newUser = {};

//   inputModal.forEach((input) => {
//     newUser[input.id] = input.value;
//     clearInputField(input);
//     validateInputBackground(input);
//   });

//   return newUser;
// }








// This function will add the user into the array
// function addUserToArray(user) {
//   usersArray.push(user);
//   console.log(usersArray);
// }

// function handleSaveNewUser(e) {
//   e.preventDefault();

//   const user = captureUserData();
//   clearProfilePicture();
//   addUserToArray(user);
// }

// function handleSaveNewUser(e) {
//   // e.preventDefault();

//   const user = captureUserData();
//   if (user === null) {
//     console.log("please enter a user name")
//     // parentElement.classList.add("active-error", "active-error-message");
//     return;
//   }

//   clearProfilePicture();
//   addUserToArray(user);
// }

// convert the image to a file and then show the profile picture in the section 
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

// function handleInputFocus(input) {
//   input.parentElement.classList.add("active");
// }

// function handleInputBlur(input) {
//   const parentElement = input.parentElement;
//   parentElement.classList.remove("active", "active-error");
//   if (!input.validity.valid) {
//     parentElement.classList.add("active-error", "active-error-message");
//   } else {
//     parentElement.classList.add("active");
//   }
// }

// function validateInputBackground(input) {
//   if (input.parentElement.classList.contains("active")) {
//     input.parentElement.classList.remove("active");
//   }
// }

// function validateInputFields() {
//   inputModal.forEach((input) => {
//     input.addEventListener("focus", () => handleInputFocus(input));
//     input.addEventListener("blur", () => handleInputBlur(input));
//   });
// }

// validateInputFields();














