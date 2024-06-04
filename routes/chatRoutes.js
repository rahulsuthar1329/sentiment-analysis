import { Router } from "express";
import {
  createChat,
  deleteChat,
  generateRandomChats,
  generateRandomMessage,
  getAdmins,
  getChat,
  getChats,
  getMessages,
  setRandomLatestMessage,
} from "../controllers/chatContorller.js";
import { verifyToken } from "../utils/auth.js";

const router = Router();

router.get("/getChats", verifyToken, getChats);
router.get("/getChat/:chatId", verifyToken, getChat);
router.get("/setRandomLatestMessage", verifyToken, setRandomLatestMessage);
router.get("/getAdmins/:chatId", verifyToken, getAdmins);
router.post("/create", createChat);
router.get("/:chatId/getMessages", getMessages);
router.post("/generateRandomChats", verifyToken, generateRandomChats);
router.post("/generateRandomMessage", generateRandomMessage);
router.delete("/deleteChat/:chatId", verifyToken, deleteChat);

export default router;
