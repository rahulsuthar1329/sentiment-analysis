import express from "express";
import { verifyToken } from "./../utils/auth.js";
const router = express.Router();

router.post("/login", verifyToken, login);
router.post("/register", verifyToken, register);
router.post("/refresh_token", verifyToken, sendRefreshToken);
