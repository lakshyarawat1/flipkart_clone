

const userSignUp = (req,res) => {
    try {
        console.log(req.body)
    } catch (error) {
        console.log('Error occured while routing signup')
    }
}

export default userSignUp