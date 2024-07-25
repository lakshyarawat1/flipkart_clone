import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import process from "process";
import bcrypt from "bcrypt";

const validatePassword = (password) => {
  const policies = {
    validLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  return policies;
};

export const userSignUp = async (request, response) => {
  try {
    if (!validatePassword(request.body.password)) {
      response.status(403).json("Password too weak !");
    }

    const exist = await User.findOne({ userName: request.body.userName });
    if (exist) {
      return response.status(401).json({ message: "User already exist" });
    }
    const user = request.body;
    const token = jwt.sign(
      {
        userName: user.userName,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);

    const userUpdated = {
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      password: hashedPassword,
      phone: user.phone,
      token: token,
    };

    const newUser = new User(userUpdated);
    const savedUser = await newUser.save();

    return response.status(200).json({
      user: {
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        userName: savedUser.userName,
        email: savedUser.email,
        phone: savedUser.phone,
        token: savedUser.token,
      },
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const userName = req.body.userName;
    const password = req.body.password;

    let user = await User.findOne({ userName: userName });

    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const token = jwt.sign(
          {
            userName: user.userName,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
        user.token = token;

        return res.status(200).json({
          user: {
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            email: user.email,
            phone: user.phone,
            token: user.token,
          },
        });
      } else {
        return res.status(401).json("Invalid Credentials");
      }
    } else {
      return res.status(404).json("User doesnot exist !");
    }
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const getCurrentUser = async (req, res) => {
  const token = req.headers.authorization
    ? req.headers.authorization.split(" ")[1]
    : null;
  if (!token) {
    return res.status(401).json("No token given.");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json({ user: decoded });
  } catch (err) {
    return res.status(403).json({ message: err.message });
  }
};
