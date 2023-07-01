// import { response } from "express";

const urlLogin = "http://localhost:4000/api/userAdmin/login";


let errorMessage;

export const loginValidation = async (client) => {
  try {
    const response = await fetch(urlLogin, {
      method: "POST",
      body: JSON.stringify(client),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 404) {
      const errorData = await response.json();
      const errorMessage = errorData.msg;
      throw new Error(errorMessage);
    }

    if (!response.ok) {
      throw new Error(
        "Failed to verify user. Please contact the IT department."
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    // Mostrar una alerta en la página
    alert(error.message);
  }
};




