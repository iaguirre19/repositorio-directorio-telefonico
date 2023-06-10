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


// This function takes an array and performs a validation to determine whether to display a message if the user has not entered a correct value for each input. It also changes the background color of the icon on the left to red if the value is incorrect, or green if the user has entered the correct value. 
inputsValidation.forEach((input) => {
    input.addEventListener("blur", () => {
        if (input.validity.valid) {
            input.parentElement.classList.add("active");
            input.parentElement.classList.remove("active-error");
            removeErrorMessage(input);
        } else {
            input.parentElement.classList.add("active-error");
            console.log("Se activó el error");
            createErrorMessage(input, validate(input));
        }
    });
});

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
    } else {
        // return "Please enter a valid value.";
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

