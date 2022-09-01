import User from '../models/userSchema.js'

const userSignUp = async (req,res) => {
    try {

        await User.findOne({ userName: req.body.userName })
        if (exist) {
            return res.status(401).json({message : 'Username already exist'})
        }
        const user = req.body;
        const newUser = new User(user)
        await newUser.save()

        res.status(200).json({message : user})
    } catch (error) {
        res.status(500).json({ message : error.message})
    }
}

export default userSignUp