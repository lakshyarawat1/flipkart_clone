import axios from 'axios'

const URL = 'http://localhost:4000'

export const authenticateSignUp = async (signup) => {
    try {
        return await axios.post(`${URL}/signup`, signup)
    } catch (error) {
        console.log('Error while calling sign up api', error)
    }
}