

const userSignUp = (req,res) => {
    try {
        console.log(req.body)
    } catch (error) {
        console.log('Error while signing up')
    }
}

export default userSignUp