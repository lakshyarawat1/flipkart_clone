import axios from "axios"

export const getCurrentUser = async (token) => {
    const user = await axios.get('/get-user', token)
    return user;
}

export const signOutUser = async () => { 
    localStorage.removeItem('token')
}