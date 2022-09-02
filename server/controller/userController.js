import User from '../models/userSchema.js'

const userSignUp = async (request, response) => {
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

export default userSignUp