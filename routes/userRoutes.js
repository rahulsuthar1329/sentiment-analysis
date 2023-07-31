import { Router } from "express";
import { verifyToken } from "./../utils/auth.js";
const router = Router();

router.post("/login", verifyToken, login);
router.post("/register", verifyToken, register);
router.post("/refresh_token", verifyToken, sendRefreshToken);
router.post("/logout", verifyToken, logout);
