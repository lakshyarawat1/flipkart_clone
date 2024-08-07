import axios from "axios";

export const validateCurrentUser = async (token) => {
  const user = await axios.get(
    "https://flipkart-clone-rho-sable.vercel.app/get-user",
    token
  );
  return user;
};

export const signOutUser = async () => {
  localStorage.removeItem("token");
};
