import axios from "axios";

const url = "http://localhost:4000";

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
    return await axios.get(`${url}/get-user`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
  } catch (error) {
    return error;
  }
};
