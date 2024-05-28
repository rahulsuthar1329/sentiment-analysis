import { Router } from "express";
import {
  createChat,
  generateRandomChats,
  generateRandomMessage,
  getAdmins,
  getChat,
  getChats,
  getMessages,
  setRandomLatestMessage,
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

export default router;
