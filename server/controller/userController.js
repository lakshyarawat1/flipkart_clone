import User from '../models/userSchema.js'

export const userSignUp = async (request, response) => {
  try {
    const exist = await User.findOne({ userName: request.body.userName });
    if (exist) {
      return response.status(401).json({ message: "User already exist" });
    }
    const user = request.body;
    const userUpdated = user
    console.log(userUpdated)
    const newUser = new User(userUpdated);
    newUser.save();
    response.status(200).json({ mesage: userUpdated });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const userName = req.body.userName;
    const password = req.body.password;


    let user = await User.findOne({ userName: userName, password: password })
    if (user) {
      return (res.status(200).json(' login successful '))
    } else {
      return res.status(401).json('Invalid Login')
    }
  } catch (error) {
    return res.status(500).json({message : error})
  }
}

export default { userSignUp, userLogin }