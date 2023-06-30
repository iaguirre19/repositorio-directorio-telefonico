export const userData = [];
const urlLogin = "http://localhost:4000/api/userAdmin/test";

export const loginValidation = async (client) => {
  try {
    console.log(client);
    const response = await fetch(urlLogin, {
      method: "POST",
      body: JSON.stringify(client),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(
        "Failed to verify user. Please contact the IT department."
      );
    }

    const data = await response.json();
    userData.push(data);
    return userData;
  } catch (error) {
    console.log(error.message);
  }
};
