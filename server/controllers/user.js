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

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });
    if (!user) res.send(null);
    else {
      const correctPassword = bcrypt.compareSync(password, user.password);
      if (!correctPassword) res.send(null);
      else {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.send({ user, token });
      }
    }
  } catch (error) {
    res.send(error);
  }
};
