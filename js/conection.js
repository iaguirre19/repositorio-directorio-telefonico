// // Realizar una solicitud GET al servidor
// fetch("http://localhost:4000/api/userAdmin/phone-book", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data); // Imprimir la respuesta del servidor en la consola
//     // Haz algo más con los datos recibidos del servidor
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//     // Manejar el error de la solicitud
//   });

// const fetchCreateNewUser = async () => {
//   const url = "http://localhost:4000/api/users";

//   const userData = {
//     name: "pedro lopez Aguirre",
//     email: "iaguirr0@gmail.com",
//     office: "Remote",
//     extention: "40021",
//     manager: "Christian Colorado",
//     rol: "Frontend Developer",
//   };

//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(userData),
//   };

//   const res = await fetch(url, requestOptions);
//   const data = await res.json();
//   console.log(res)

// };

// fetchCreateNewUser()



const fetchListen = async () => {
  const res = await fetch("http://localhost:4000/api/users");
  const data = await res.json();
  return data;
};

const obtenerDatos = async () => {
  const datos = await fetchListen();
  const { msg } = datos;
  console.log(msg);
};

obtenerDatos();
