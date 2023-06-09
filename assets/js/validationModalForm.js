const errorMessage = document.querySelector(".error-message");
const inputsValidation = document.querySelectorAll(".input-modal");



// inputsValidation.forEach((input) => {
//     input.addEventListener("blur", () => {
//         if(input.validity.valid){
//             input.parentElement.classList.add("active");
//             input.parentElement.classList.remove("acitive-error");
//             validate(input);
//             console.log(input.target)

//         }else{
//             input.parentElement.classList.add("acitive-error");
//             console.log("se activo el error")
//         }
//     })
// })

// function validate(input){
//     const typeOfInput = input.dataset.type;
    
// }

inputsValidation.forEach((input) => {
    input.addEventListener("blur", () => {
      if (input.validity.valid) {
        input.parentElement.classList.add("active");
        input.parentElement.classList.remove("active-error");
    } else {
        input.parentElement.classList.add("active-error");
        console.log("Se activó el error");
        validate(input);
    }
});
  });
  
  function validate(input) {
    const typeOfInput = input.dataset.type;
    if(validateMessage[typeOfInput]) {
        console.log(validateMessage[typeOfInput])
    }
        
    }
  

const validateMessage = {
    "full name": "you write a full name correct",
}








// function messageError(input){

// }