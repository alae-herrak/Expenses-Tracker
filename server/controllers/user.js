import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const createUser = async (req, res) => {
  const { username, profilePicture, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 13);
  const user = new User({ username, profilePicture, password: hashedPassword });
  try {
    const savedUser = await user.save();
    const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET);
    res.send({ user: savedUser, token });
  } catch (error) {
    res.send(error);
  }
};

export const getAllUsernames = async (req, res) => {
  try {
    const usernames = await User.find({}, { _id: 0, username: 1 });
    res.send(usernames);
  } catch (error) {
    res.send(error);
  }
};
