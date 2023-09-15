import { Router } from "express";
import {
  login,
  register,
  sendAuthOTP,
  changePassword,
  verfiyOTP,
} from "../controllers/authControllers.js";
const router = Router();

// router.post("/login", verifyToken, login);
router.post("/login", login);
router.post("/register", register);
router.post("/verify_otp", verfiyOTP);
router.post("/send_auth_otp", sendAuthOTP);
router.post("/update_password", changePassword);
// router.post("/refresh_token", verifyToken, sendRefreshToken);
// router.post("/logout", verifyToken, logout);

export default router;
