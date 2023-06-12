const inputModal = document.querySelectorAll(".input-modal");
const btnSaveNewUser = document.querySelector("#btnModalForm");
const btnCancel = document.querySelector(".cancel");
const btnNewUser = document.querySelector(".content_add");
const background = document.querySelector(".background-modal");
const newUserModal = document.querySelector(".add_newuser-modal");

const userProfile = [];



btnNewUser.addEventListener("click", showNewUserModal);
btnCancel.addEventListener("click", closeModalForm);
btnSaveNewUser.addEventListener("click", saveNewUserModal);


function saveNewUserModal(e) {
  e.preventDefault();
  
  const newUserObject = {};
  inputModal.forEach((input) => {
    const inputType = input.dataset.type;
    
    if (input.value === "") {
      input.focus();
      input.parentElement.classList.add("active-error");
    } else {
      if (inputType === "phoneNumber") {
        const phoneNumber = input.value.replace(/\s/g, "");
        newUserObject[inputType] = phoneNumber;
      } else if (inputType === "profilePicture") {
        const imagen = input.files[0];
        if (imagen) {
          const lector = new FileReader();
          
          lector.onload = function(evento) {
            const imagenURL = evento.target.result;
            
            newUserObject[inputType] = imagenURL;
            
            closeModalForm(e);
            userProfile.push(newUserObject);
            console.log(userProfile);
            fillProfileData(userProfile);
          };
          
          lector.readAsDataURL(imagen);
        }
      } else {
        newUserObject[inputType] = input.value;
      }
    }
  });
}



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
    function closeModalForm(e){
      newUserModal.classList.remove("active-modal");
      background.classList.remove("active-modal");
      clearModalInputs(inputModal)
    }
    
    function fillProfileData(users) {
      const container = document.getElementById('profiles-container');
      
      cleanHtml(container)
      
      let i = 1;
      
      users.forEach(function(user) {
        const profile = document.createElement('a');
        profile.className = 'card_profile';
        profile.href = '#';


    const checkbox = document.createElement('input');
    checkbox.className = 'check-box-directory';
    checkbox.type = 'checkbox';
    checkbox.id = `check${i}`;
    profile.appendChild(checkbox);

    const profileContent = document.createElement('div');
    profileContent.className = 'card_content-profile';
    profile.appendChild(profileContent);

    const profileImg = document.createElement('img');
    profileImg.src = user.profilePicture;
    profileImg.alt = 'img profile';
    profileImg.width = '20px';
    profileContent.appendChild(profileImg);

    const profileData = document.createElement('div');
    profileData.className = 'card_content-data';

    const profileName = document.createElement('h4');
    profileName.textContent = user.fullName;
    profileData.appendChild(profileName);

    const profileEmail = document.createElement('p');
    profileEmail.textContent = user.email;
    profileData.appendChild(profileEmail);

    profileContent.appendChild(profileData);


    const chevron = document.createElement('span');
    chevron.className = "arrow-link";
    chevron.innerHTML = '<i class="bx bx-chevron-right"></i>';
    profile.appendChild(chevron);


    container.appendChild(profile);
    
    i = i + 1
  });
}

function cleanHtml(container){
  container.innerHTML = '';
}

const cardContent = document.querySelector("#profiles-container");

cardContent.addEventListener("click", (e) => {
  console.log(e.target.classList);
})