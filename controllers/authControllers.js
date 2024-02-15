import User from "../models/User.js";
import Verification from "../models/Verify.js";
import { connect } from "../config/db.js";
import bcrypt from "bcrypt";
import { generateAccessToken } from "../utils/auth.js";
import { generateOTP } from "../utils/otp.js";
import { sendOtpToMail } from "../utils/mail.js";

export const login = async (req, res) => {
  console.log("-------Login API Called-------");
  const { uniqueId, password, remember } = req.body;

  try {
    connect();

    const isExist = await User.find({
      $or: [{ username: uniqueId }, { email: uniqueId.toLowerCase() }],
    });

    if (!isExist.length)
      return res.status(403).json({ message: "Invalid Credentials!" }); // this message should be changed to "Invalid Username or Password!" for security reasons

    const isPasswordMatch = await bcrypt.compare(password, isExist[0].password);

    if (!isPasswordMatch)
      return res.status(403).json({ message: "Invalid Username or Password!" });
    const token = await generateAccessToken(uniqueId, remember);

    isExist[0].password = undefined;

    console.log("User:", isExist[0]);

    return res
      .status(200)
      .json({ message: "Login Successfully...", token, user: isExist[0] });
  } catch (error) {
    console.log("Login Error: ", error);
    return res.status(500).json(error);
  }
};

export const register = async (req, res) => {
  console.log("-------Register API Called-------");
  const {
    firstName,
    lastName,
    username,
    email,
    password,
    dateOfBirth,
    gender,
    mobile,
    combinedOTP,
  } = req.body;

  try {
    await connect();
    // check if email or username already exists
    const isExist = await Verification.findOne({ email });
    if (!isExist || isExist.otp !== combinedOTP)
      return res.status(400).json({ message: "OTP doesn't match!" });

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
      mobile,
      gender,
    });
    return res.status(201).json({ message: "User Registered Successfully." });
  } catch (error) {
    console.log("Register Error: ", error);
    return res.status(500).json(error);
  }
};

export const registerWithGoogle = async (req, res) => {
  console.log("-------Register API Called-------");
  const { name, email, picture } = req.body;

  try {
    await connect();
    // check if email or username already exists
    const isExist = await Verification.findOne({ email });
    if (!isExist || isExist.otp !== combinedOTP)
      return res.status(400).json({ message: "OTP doesn't match!" });

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
      mobile,
      gender,
    });
    return res.status(201).json({ message: "User Registered Successfully." });
  } catch (error) {
    console.log("Register Error: ", error);
    return res.status(500).json(error);
  }
};

export const verifyOTP = async (req, res) => {
  console.log("-------sendAuthOTP API Called-------");
  const { email, otp } = req.body;
  try {
    await connect();
    const isExist = await Verification.findOne({ email });
    if (isExist && isExist.otp === otp) {
      return res.status(200).json({ message: "OTP verified successfully." });
    } else {
      return res.status(400).json({ message: "OTP doesn't match!" });
    }
  } catch (error) {
    console.log("Verify OTP Error : ", error);
    return res.status(500).json({ message: "Internal Server Error!", error });
  }
};

export const sendAuthOTP = async (req, res) => {
  console.log("-------sendAuthOTP API Called-------");
  const { email, username } = req.body;
  const otp = generateOTP();

  try {
    await connect();
    const isExist = await User.find({
      $or: [{ username }, { email }],
    });
    if (isExist.length) {
      // check what field already exist email or username or both
      if (
        isExist.length > 1 ||
        (isExist.length === 1 &&
          isExist[0].username === username &&
          isExist[0].email === email)
      )
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
    console.log("otp:", otp);

    const otpExist = await Verification.findOne({ email });
    if (otpExist) {
      otpExist.otp = otp;
      await otpExist.save();
      sendOtpToMail(email, otp);
      return res
        .status(200)
        .json({ message: "OTP sent to your email successfully!" });
    }

    // const response = await Verification.create({ email, otp });
    // console.log("OTP reponse : ", response);
    const response = await Verification.create({ email, otp });
    sendOtpToMail(email, otp);
    return res
      .status(200)
      .json({ message: "OTP sent to your email successfully!" });
  } catch (error) {
    console.log("Resend OTP Error : ", error);
    res.status(500).json({ message: "Error while resending otp!" });
  }
};

export const sendOTP = async (req, res) => {
  console.log("-------sendOTP API Called-------");
  const { email } = req.body;
  const otp = generateOTP();

  try {
    await connect();
    const isExist = await User.find({ email });
    if (!isExist.length)
      return res.status(400).json({ message: "Email doesn't exist!" });
    console.log("otp:", otp);

    const otpExist = await Verification.findOne({ email });
    if (otpExist) {
      otpExist.otp = otp;
      const resp = await otpExist.save();
      console.log("resp: ", resp);
      sendOtpToMail(email, otp);
      return res
        .status(200)
        .json({ message: "OTP sent to your email successfully!" });
    }

    const response = await Verification.create({ email, otp });
    sendOtpToMail(email, otp);
    return res
      .status(200)
      .json({ message: "OTP sent to your email successfully!" });
  } catch (error) {
    console.log("Resend OTP Error : ", error);
    res.status(500).json({ message: "Error while resending otp!" });
  }
};

export const changePassword = async (req, res) => {
  console.log("-------resendOTP API Called---------");
  const { email, password } = req.body;
  try {
    await connect();

    const salt = await bcrypt.genSalt(10); // 10 is salt rounds
    const encryptedPassword = await bcrypt.hash(password, salt);

    const user = await User.findOne({ email });

    if (user.password === encryptedPassword)
      return res
        .status(400)
        .json({ message: "New password matches previous password!" });

    user.password = encryptedPassword;
    await user.save();

    res.status(200).json({ message: "Password updated successfully!" });
  } catch (error) {
    console.log("Change Password Error: ", error);
    return res.status(500).json(error);
  }
};

export const authTest = async (req, res) => {
  return res.status(200).json({ message: "Authorized" });
};
