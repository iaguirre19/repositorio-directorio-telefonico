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

const uploadInput = document.getElementById("upload-input");
const contentImg = document.querySelector(".content-img");

uploadInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      const image = new Image();
      image.src = reader.result;

      contentImg.innerHTML = ""; // Limpiar contenido existente
      contentImg.appendChild(image); // Agregar imagen cargada al contenedor

      contentImg.classList.add("has-image"); // Agregar clase para indicar que se ha cargado una imagen
    });

    reader.readAsDataURL(file);
  }
});
