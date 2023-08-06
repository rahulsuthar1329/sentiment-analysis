import { Router } from "express";
import { login, register, resendOTP } from "../controllers/authControllers.js";
const router = Router();

// router.post("/login", verifyToken, login);
router.post("/login", login);
router.post("/register", register);
router.post("/resend_otp", resendOTP);
// router.post("/refresh_token", verifyToken, sendRefreshToken);
// router.post("/logout", verifyToken, logout);

export default router;
