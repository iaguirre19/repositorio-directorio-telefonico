const btnNewUser = document.querySelector(".content_add");
const background = document.querySelector(".background-modal");
const newUserModal = document.querySelector(".add_newuser-modal");



btnNewUser.addEventListener("click", showModal);



function showModal(e) {
  e.preventDefault();
  newUserModal.classList.add("active-modal");
  background.classList.add("active-modal");
  background.addEventListener("click", closeModal);
}

function closeModal(e) {
  
  if (e.target === background) {
    newUserModal.classList.remove("active-modal");
    background.classList.remove("active-modal");
  }
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
//   }
// };






