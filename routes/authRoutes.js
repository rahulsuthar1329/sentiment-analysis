import { Router } from "express";
import {
  login,
  sendOTP,
  register,
  authTest,
  verifyOTP,
  sendAuthOTP,
  changePassword,
  registerWithGoogle,
} from "../controllers/authControllers.js";
import { verifyToken } from "../utils/auth.js";
const router = Router();

// router.post("/login", verifyToken, login);
router.post("/login", login);
router.post("/register", register);
router.post("/register_google", registerWithGoogle);
router.post("/verify_otp", verifyOTP);
router.post("/send_otp", sendOTP);
router.post("/send_auth_otp", sendAuthOTP);
router.post("/update_password", changePassword);
router.get("/auth_test", verifyToken, authTest);
// router.post("/refresh_token", verifyToken, sendRefreshToken);
// router.post("/logout", verifyToken, logout);

export default router;
