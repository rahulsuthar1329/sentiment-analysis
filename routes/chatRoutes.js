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
  deleteChatWithWord,
} from "../controllers/chatContorller.js";

const router = Router();

router.get("/getChats", getChats);
router.get("/getChat/:chatId", getChat);
router.get("/setRandomLatestMessage", setRandomLatestMessage);
router.get("/getAdmins/:chatId", getAdmins);
router.post("/create", createChat);
router.get("/:chatId/getMessages", getMessages);
router.post("/generateRandomChats", generateRandomChats);
router.post("/generateRandomMessage", generateRandomMessage);
router.delete("/deleteChat/:chatId", deleteChat);
router.delete("/deleteChat", deleteChatWithWord);

export default router;
