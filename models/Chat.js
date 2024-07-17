import { Schema, model } from "mongoose";

const chatSchema = new Schema(
  {
    chatName: { type: String, required: true },
    latestMessage: String,
    profileImage: String,
    unseenMessageCount: { type: Number, default: 0 },
    users: Array,
    isGroupChat: { type: Boolean, required: true },
    lastSeen: Date,
    isActive: { type: Boolean, required: true },
    adminUsers: Array,
  },
  { timestamps: true }
);

const Chat = model("Chat", chatSchema); // collection created

export default Chat;
