import User from "../models/User.js";
import { connect } from "../config/db.js";
import bcrypt from "bcrypt";
import { generateAccessToken } from "../utils/auth.js";
import { generateOTP } from "../utils/otp.js";
import { sendOtpToMail } from "../utils/mail.js";

export const login = async (req, res) => {
  console.log(
    "-----------------------------Login API Called-------------------------------"
  );
  const { uniqueId, password } = req.body;
  let token;
  try {
    connect();

    const isExist = await User.find({
      $or: [{ username: uniqueId }, { email: uniqueId }],
    });

    if (!isExist.length)
      return res.status(403).json({ message: "User not registered!" });

    const isPasswordMatch = await bcrypt.compare(password, isExist[0].password);

    if (isPasswordMatch) token = await generateAccessToken(uniqueId);

    return res
      .status(200)
      .json({ message: "Login Successfully...", token, user: isExist[0] });
  } catch (error) {
    console.log("Login Error: ", error);
    return res.status(500).json(error);
  }
};

export const register = async (req, res) => {
  console.log(
    "-----------------------------Register API Called-------------------------------"
  );
  const { firstName, lastName, username, email, password, dateOfBirth } =
    req.body;

  try {
    await connect();
    // check if email or username already exists
    const isExist = await User.find({
      $or: [{ username }, { email }],
    });

    if (isExist.length) {
      // check what field already exist email or username or both
      if (isExist.length > 1)
        return res
          .status(403)
          .json({ message: "Email and Username already exist!" });
      else if (isExist[0].username === username)
        return res.status(403).json({ message: "Username already exist!" });
      else if (isExist[0].email === email)
        return res.status(403).json({ message: "Email already exist!" });
      else
        return res
          .status(403)
          .json({ message: "Unknown Error! Check backend Console..." });
    }

    // Encrypt password
    const salt = await bcrypt.genSalt(10); // 10 is salt rounds
    const encryptedPassword = await bcrypt.hash(password, salt);

    // store user details in database
    const response = await User.create({
      firstName,
      lastName,
      username,
      email,
      password: encryptedPassword,
      dateOfBirth,
    });

    return res.status(201).json({ message: "User Registered Successfully..." });
  } catch (error) {
    console.log("Register Error: ", error);
    return res.status(500).json(error);
  }
};

export const resendOTP = (req, res) => {
  console.log(
    "-----------------------------resendOTP API Called-------------------------------"
  );
  const { email } = req.body;
  const otp = generateOTP();

  try {
    console.log("otp:", otp);
    sendOtpToMail(email, otp);
    return res
      .status(200)
      .json({ message: "OTP sent to your email successfully!", otp });
  } catch (error) {
    console.log("Resend OTP Error : ", error);
    res.status(500).json({ message: "Error while resending otp!" });
  }
};
