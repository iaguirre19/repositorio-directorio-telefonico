const errorMessage = document.querySelector(".error-message");
const inputsValidation = document.querySelectorAll(".input-modal");
const input = document.getElementById("profile-img");
const image = document.getElementById("profileImage");


input.addEventListener("change", handleImageUpload);
// This function upload the image that the user load before and show it in the top of the modal
function handleImageUpload() {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            image.src = e.target.result;
            image.style.opacity = "1";
        };
        reader.readAsDataURL(file);
    };
}



inputsValidation.forEach((inputElement) => {
  inputElement.addEventListener("blur", () => {
    if (inputElement.validity.valid) {
      toggleActiveClass(inputElement.parentElement, true);
      const errorProfile = document.querySelector(".profile_picture-error");
      errorProfile.style.display = "none";
      removeErrorMessage(inputElement);
    } else {
      toggleActiveClass(inputElement.parentElement, false);
      createErrorMessage(inputElement, validate(inputElement));
    }
  });
});

function toggleActiveClass(element, isValid) {
  if (isValid) {
    element.classList.add("active");
    element.classList.remove("active-error");
  } else {
    element.classList.add("active-error");
    element.classList.remove("active");
  }
}












// This function create an error message when the user doesn't type any value into the input
function createErrorMessage(input, message) {
    if (!hasErrorMessage(input)) {
        const errorMessageP = document.createElement("p");
        errorMessageP.className = "error-input-invalid";
        errorMessageP.textContent = message;
        input.parentElement.appendChild(errorMessageP);
    }
}


function removeErrorMessage(input) {
    const errorMessage = input.parentElement.querySelector(".error-input-invalid");
    if (errorMessage) {
        errorMessage.remove();
    }
}

function hasErrorMessage(input) {
    return input.parentElement.querySelector(".error-input-invalid") !== null;
}

function validate(input) {
    const typeOfInput = input.dataset.type;
    if (validateMessage[typeOfInput]) {
        return validateMessage[typeOfInput];
    }
}

const validateMessage = {
    fullName: "Please enter your full name.",
    email: "Please enter a valid email address.",
    phoneNumber: "Please enter a valid phone number.",
    jobTitle: "Please enter a valid job title.",
    manager: "Please enter the name of your manager.",
    office: "Please enter a valid office.",
};

