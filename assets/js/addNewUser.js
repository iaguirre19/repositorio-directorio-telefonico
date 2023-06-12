import { generateId } from "./idGenerator.js";


const inputModal = document.querySelectorAll(".input-modal");
const btnSaveNewUser = document.querySelector("#btnModalForm");
const btnCancel = document.querySelector(".cancel");
const btnNewUser = document.querySelector(".content_add");
const background = document.querySelector(".background-modal");
const newUserModal = document.querySelector(".add_newuser-modal");
const cardContent = document.querySelector("#profiles-container");

btnNewUser.addEventListener("click", showNewUserModal);
btnCancel.addEventListener("click", closeModalForm);
btnSaveNewUser.addEventListener("click", saveNewUserModal);


const userProfile = [
  {
    id: generateId(),
    profilePicture:
      "https://cdn-1.motorsport.com/images/mgl/0mb95oa2/s400/lewis-hamilton-mercedes-1.webp",
    fullName: "Lewis Hamilton",
    email: "lewis.hamilton@mercedes.com",
    jobTitle: "Sr Full Stack",
    manager: "Christian Colorado",
    office: "Remote",
    phoneNumber: "7778902179",
    message:"We're delighted to have you join our team! Your expertise and success. Welcome aboard!"
  },
  {
    id: generateId(),
    profilePicture:
      "https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.1024.medium.jpg",
    fullName: "Max Verstappen",
    email: "verstappen@redbullracing.com",
    jobTitle: "Sr Full Stack",
    manager: "Christian Colorado",
    office: "Remote",
    phoneNumber: "7772562179",
  }
];



function saveNewUserModal(e) {
  e.preventDefault();

  const newUserObject = {};
  const errors = [];

  inputModal.forEach((input) => {
    const inputType = input.dataset.type;
    const inputValue = input.value.trim();

    if (inputValue === "") {
      errors.push(input);
      input.parentElement.classList.add("active-error");
    } else {
      if (inputType === "phoneNumber") {
        const phoneNumber = inputValue.replace(/\s/g, "");
        newUserObject[inputType] = phoneNumber;
      } else if (inputType === "profilePicture") {
        const imagen = input.files[0];
        if (imagen) {
          const reader = new FileReader();

          reader.onload = function (event) {
            const imageURL = event.target.result;

            newUserObject[inputType] = imageURL;

            closeModalForm(e);
            userProfile.push(newUserObject);
            fillProfileData(userProfile);
          };

          reader.readAsDataURL(imagen);
        }
      } else {
        newUserObject[inputType] = inputValue;
      }
    }
  });

  if (errors.length > 0) {
    errors[0].focus();
  }

  newUserObject.id = generateId();
};


function showNewUserModal(e) {
  e.preventDefault();
  newUserModal.classList.add("active-modal");
  background.classList.add("active-modal");
  background.addEventListener("click", closeModal);
}

function closeModal(e) {
  if (e.target === background) {
    newUserModal.classList.remove("active-modal");
    background.classList.remove("active-modal");
    clearModalInputs(inputModal);
  }
}

function clearModalInputs(inputValues) {
  inputValues.forEach((input) => {
    input.value = "";
    if (
      input.parentElement.classList.contains("active") ||
      input.parentElement.classList.contains("active-error")
    ) {
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
function closeModalForm(e) {
  newUserModal.classList.remove("active-modal");
  background.classList.remove("active-modal");
  clearModalInputs(inputModal);
}

function fillProfileData(users) {
  const container = document.getElementById("profiles-container");

  cleanHtml(container);

  let i = 1;

  users.forEach(function (user) {
    const idUser = user.id
    const profile = document.createElement("a");
    profile.id = idUser;
    profile.className = "card_profile";
    profile.href = "#";

    const checkbox = document.createElement("input");
    checkbox.className = "check-box-directory";
    checkbox.type = "checkbox";
    checkbox.id = `check${i}`;
    profile.appendChild(checkbox);

    const profileContent = document.createElement("div");
    profileContent.className = "card_content-profile";
    profile.appendChild(profileContent);

    const profileImg = document.createElement("img");
    profileImg.src = user.profilePicture;
    profileImg.alt = "img profile";
    profileImg.width = "20px";
    profileContent.appendChild(profileImg);

    const profileData = document.createElement("div");
    profileData.className = "card_content-data";

    const profileName = document.createElement("h4");
    profileName.textContent = user.fullName;
    profileData.appendChild(profileName);

    const profileEmail = document.createElement("p");
    profileEmail.textContent = user.email;
    profileData.appendChild(profileEmail);
    profileContent.appendChild(profileData);

    const chevron = document.createElement("span");
    chevron.className = "arrow-link";
    chevron.innerHTML = '<i class="bx bx-chevron-right"></i>';
    profile.appendChild(chevron);
    container.appendChild(profile);

    i = i + 1;
  });
}

function cleanHtml(container) {
  container.innerHTML = "";
}

fillProfileData(userProfile);



cardContent.addEventListener("click", (e) => {
  if (e.target.classList.contains("bx-chevron-right")) {
    e.preventDefault();
    
    const cardContain = document.querySelector(".card_detail-content");
    cardContain.style.display = "grid";

    const parentElement = e.target.parentNode.parentNode;
    const parentId = parentElement.id;



    cardDetail(userProfile, parentId)
    
  }
});

function cardDetail(data, id) {
  data.forEach((user) => {
    if(user.id === id){
      const imgSrcCard = document.querySelector(".card-detail-img");
      imgSrcCard.src = user.profilePicture;

      const nameCard = document.querySelector(".header_title-info");
      nameCard.textContent = user.fullName


      const emailCard = document.querySelector(".email-data");
      emailCard.textContent = user.email

      
      const phoneCard = document.querySelector(".phone-data");
      const phoneNumber = user.phoneNumber;
      const formattedPhoneNumber = phoneNumber.slice(0, 3) + "-" + phoneNumber.slice(3, 6) + "-" + phoneNumber.slice(6);
      phoneCard.textContent = formattedPhoneNumber;

      const jobCard = document.querySelector(".job-data");
      jobCard.textContent = user.jobTitle;

      const managerCard = document.querySelector(".manager-data");
      managerCard.textContent = user.manager;

      const officeCard = document.querySelector(".office-data");
      officeCard.textContent = user.office;

      const messageCard = document.querySelector(".notes_card-body");
      messageCard.appendChild(createMessageDiv("Monday", "12.36", user.message))
    
    }

  });

}



function createMessageDiv(day, time, message) {
  const div = document.createElement('div');
  div.classList.add('notes_message');

  // const headerRightDiv = document.createElement('div');
  // headerRightDiv.classList.add('header_right-date');

  // var daySpan = document.createElement('span');
  // daySpan.classList.add('header_right-day');
  // daySpan.textContent = day;

  // var timeSpan = document.createElement('span');
  // timeSpan.classList.add('header_right-hrs');
  // timeSpan.textContent = time;

  // headerRightDiv.appendChild(daySpan);
  // headerRightDiv.appendChild(timeSpan);

  // var messageParagraph = document.createElement('p');
  // messageParagraph.classList.add('body_text-p');
  // messageParagraph.textContent = message;

  // div.appendChild(headerRightDiv);
  // div.appendChild(messageParagraph);

  return div;
}

// // Ejemplo de uso:
// var day = 'Monday';
// var time = '17:20';
// var message = "We're delighted to have you join our team! Your expertise and success. Welcome aboard!";

// var messageDiv = createMessageDiv(day, time, message);
// console.log(messageDiv.outerHTML);
