const inputModal = document.querySelectorAll(".input-modal");
const btnSaveNewUser = document.querySelector("#btnModalForm");
const btnCancel = document.querySelector(".cancel");
const btnNewUser = document.querySelector(".content_add");
const background = document.querySelector(".background-modal");
const newUserModal = document.querySelector(".add_newuser-modal");




btnNewUser.addEventListener("click", showNewUserModal);
btnCancel.addEventListener("click", closeModalForm);


function showNewUserModal(e) {
    e.preventDefault();
    newUserModal.classList.add("active-modal");
    background.classList.add("active-modal");
    background.addEventListener("click", closeModal);
};

function closeModal(e) {
    if (e.target === background) {
        newUserModal.classList.remove("active-modal");
        background.classList.remove("active-modal");
        clearModalInputs(inputModal)
    };
};

function clearModalInputs(inputValues) {
    inputValues.forEach((input) => {
        input.value = "";
        if (
            input.parentElement.classList.contains("active") ||
            input.parentElement.classList.contains("active-error")){
                input.parentElement.classList.remove("active");
                input.parentElement.classList.remove("active-error");

        const errorElement = input.parentElement.querySelector(
            ".error-input-invalid"
            );
        if (errorElement) {
            errorElement.remove();
            }
        }
    });
    image.src = "";
    image.style.opacity = "0";
}






















// function closeModalForm() {
//     clearProfilePicture();

//     inputModal.forEach((input) => {
//         clearInputField(input);
//         validateInputBackground(input);

function closeModalForm(inputArray){
    inputArray.forEach((input)=>{
        clearInputField(input);
        validateInputBackground(input)
    });
}