const inputsForms = document.querySelectorAll(".login-input");
const showPasswordIcon = document.querySelector("#showPassword");
const passwordInput = document.querySelector("#passwordLogin");
const btnlogin = document.querySelector("#btnLogin");

let user = [];

// btnlogin.addEventListener("click", (e) => {
//   e.preventDefault();
//   // Crear un objeto para almacenar los valores del formulario
//   let loginData = {};

//   // Iterar sobre los inputs y almacenar sus valores en el objeto
//   inputsForms.forEach(function (input) {
//     const email = input.name;
//     const password = input.value;
//     loginData[email] = email;
//   });


//   console.log(loginData)

//   // Enviar el objeto loginData al API
//   fetch("http://localhost:4000/api/userAdmin/login", {
//     method: "POST",
//     body: JSON.stringify(loginData),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // Procesar la respuesta del API
//       console.log(data);
//     })
//     .catch((error) => {
//       // Manejar cualquier error que ocurra durante la solicitud
//       console.error(error);
//     });
// })

// btnlogin.addEventListener("click", (e) => {
//   e.preventDefault();

//   // Crear un objeto para almacenar los valores del formulario
//   let loginData = {};

//   // Iterar sobre los inputs y almacenar sus valores en el objeto
//   inputsForms.forEach(function (input) {
//     const name = input.getAttribute("name");
//     const value = input.value;
//     loginData[name] = value;
//   });

//   console.log(loginData);

//   fetch("http://localhost:4000/api/userAdmin/login", {
//     method: "POST",
//     body: JSON.stringify(loginData),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // Procesar la respuesta del API
//       console.log(data);

//       // Verificar si se recibió un JWT válido
//       if (data.token) {
//         // Almacenar el JWT en el almacenamiento local (localStorage o sessionStorage)
//         localStorage.setItem("jwt", data.token);

//         // Obtener el perfil del usuario
//         fetch("http://localhost:4000/api/userAdmin/profile", {
//           headers: {
//             Authorization: `Bearer ${data.token}`,
//           },
//         })
//           .then((response) => response.json())
//           .then((profileData) => {
//             // Procesar los datos del perfil del usuario
//             console.log(profileData.profile)
//             user.push(profileData);
//             window.location.href = "index.html";
//             // console.log(user)
//             // Aquí puedes hacer cualquier otra operación con los datos del perfil del usuario
//           })
//           .catch((error) => {
//             // Manejar cualquier error que ocurra durante la solicitud del perfil
//             console.error(error);
//           });
//       }
//     })
//     .catch((error) => {
//       // Manejar cualquier error que ocurra durante la solicitud del inicio de sesión
//       console.error(error);
//     });
// });





btnlogin.addEventListener("click", async (e) => {
  e.preventDefault();

  try {
    // Crear un objeto para almacenar los valores del formulario
    const loginData = {};

    // Iterar sobre los inputs y almacenar sus valores en el objeto
    inputsForms.forEach((input) => {
      const name = input.getAttribute("name");
      const value = input.value;
      loginData[name] = value;
    });

    console.log(loginData);

    const response = await fetch("http://localhost:4000/api/userAdmin/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error en la solicitud de inicio de sesión");
    }

    const data = await response.json();
    console.log(data);

    // Verificar si se recibió un JWT válido
    const { token } = data;
    if (token) {
      // Almacenar el JWT en el almacenamiento local (localStorage o sessionStorage)
      localStorage.setItem("jwt", token);

      // Obtener el perfil del usuario
      const profileResponse = await fetch(
        "http://localhost:4000/api/userAdmin/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!profileResponse.ok) {
        throw new Error("Error al obtener el perfil del usuario");
      }

      const profileData = await profileResponse.json();
      console.log(profileData.profile);
      user.push(profileData);
      window.location.href = "index.html";
      // console.log(user)
      // Aquí puedes hacer cualquier otra operación con los datos del perfil del usuario
    }
  } catch (error) {
    // Manejar cualquier error que ocurra durante la solicitud del inicio de sesión o del perfil
    console.error(error);
  }
});

















activeInputsOnClick();

function activeInputsOnClick() {
  inputsForms.forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.classList.add("active");
    });
    input.addEventListener("blur", () => {
      if (!input.validity.valid) {
        input.parentElement.classList.remove("active");
        input.parentElement.classList.add("active-error");
      } else {
        input.parentElement.classList.remove("active-error");
        input.parentElement.classList.add("active");

      }
    });
  });
};

showPasswordIcon.addEventListener('click', function() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordIcon.classList.remove('bx-show');
    showPasswordIcon.classList.add('bx-hide');
  } else {
    passwordInput.type = 'password';
    showPasswordIcon.classList.remove('bx-hide');
    showPasswordIcon.classList.add('bx-show');
  }
});




