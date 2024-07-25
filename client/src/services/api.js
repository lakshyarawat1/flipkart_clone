import axios from "axios";

const url = "https://flipkart-clone-rho-sable.vercel.app/";

export const authenticateSignUp = async (user) => {
  try {
    return await axios.post(`${url}/signup`, user);
  } catch (error) {
    console.log("error while calling Signup API: ", error);
  }
};

export const authenticateLogin = async (user) => {
  try {
    return await axios.post(`${url}/login`, user);
  } catch (error) {
    return error;
  }
};

export const validate = async () => {
  try {
    const validation = await axios.get(`${url}/get-user`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    console.log(validation.data);
    return validation.data;
  } catch (error) {
    return error;
  }
};
