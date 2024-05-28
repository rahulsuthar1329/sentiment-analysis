import { Schema, model } from "mongoose";

const messageSchema = new Schema(
  {
    chatId: { type: String, required: true },
    content: { type: String, required: true },
    seenBy: { type: Array, default: [] },
    receivedBy: { type: Array, default: [] },
    sender: { type: Schema.Types.ObjectId, required: true, ref: "users" },
    taggedUsers: Array,
    category: {
      type: String,
      required: true,
      enum: ["text", "image", "video", "document"],
    },
    uri: String,
  },
  { timestamps: true }
);

const Message = model("Message", messageSchema);

export default Message;
