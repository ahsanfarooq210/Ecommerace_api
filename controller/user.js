import User from "../models/User.js";
import CryptoJS from "crypto-js";

export const getUserTest = async (_req, res) => {
  try {
    res.status(200).json({ message: "user test is successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const userPostTest = async (req, res) => {
  try {
    const userName = req.body.userName;
    res.status(200).json({ userName: `The user name is ${userName}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User has been deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // eslint-disable-next-line no-unused-vars
    const { password, ...others } = user._doc;
    res.status(200).json({ others });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllUsers = async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().limit(5).sort({ _id: -1 })
      : await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUserStats = async (req, res) => {
  const date = new Date();
  const lastyear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const data = await User.aggregate([
      {
        $match: {
          createdAt: { $gt: lastyear },
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error);
  }
};
