import { Router } from "express";
import { verifyToken } from "./../utils/auth.js";
import { login, register } from "../controllers/userController.js";
const router = Router();

// router.post("/login", verifyToken, login);
router.post("/login", login);
router.post("/register", register);
// router.post("/refresh_token", verifyToken, sendRefreshToken);
// router.post("/logout", verifyToken, logout);

export default router;
