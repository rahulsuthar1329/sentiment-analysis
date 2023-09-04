import { Router } from "express";
import {
  login,
  register,
  sendOTP,
  changePassword,
} from "../controllers/authControllers.js";
const router = Router();

// router.post("/login", verifyToken, login);
router.post("/login", login);
router.post("/register", register);
router.post("/send_otp", sendOTP);
router.post("/update_password", changePassword);
// router.post("/refresh_token", verifyToken, sendRefreshToken);
// router.post("/logout", verifyToken, logout);

export default router;
