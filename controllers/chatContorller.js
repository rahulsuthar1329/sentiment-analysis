import User from "../models/User.js";
import Chat from "../models/Chat.js";
import Message from "../models/Message.js";
import { connect } from "../config/db.js";
import shuffle from "../utils/shuffle.js";
import messages from "../sampleData/messages.js";
import names from "../sampleData/chatNames.js";

// TODO:
// only admin can make admin or remove admin
// encryption

export const getChats = async (req, res) => {
  try {
    connect();
    const chats = await Chat.find();
    return res.status(200).json({ chats });
  } catch (error) {
    console.log("GetChatsException: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const getChat = async (req, res) => {
  try {
    connect();
    const { chatId } = req.params;
    const chat = await Chat.findOne({ _id: chatId });
    return res.status(200).json(chat);
  } catch (error) {
    console.log("GetChatException: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const generateRandomChats = async (req, res) => {
  try {
    connect();
    const { chatName } = req.body;

    let dbUsers = await User.find({}).select("username");
    shuffle(dbUsers);
    const users = dbUsers
      .slice(0, 6)
      .map((user) => `${user._id}-${user.username}`);
    const adminUsers = dbUsers
      .slice(6)
      .map((user) => `${user._id}-${user.username}`);

    const chat = await Chat.create({
      users,
      adminUsers,
      isGroupChat: true,
      chatName,
      isActive: true,
    });

    return res.status(200).json(chat);
  } catch (error) {
    console.log("GenerateRandomChatException: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const getAdmins = async (req, res) => {
  try {
    connect();
    const { chatId } = req.params;
    const { adminUsers } = await Chat.findOne({ _id: chatId });

    console.log({ adminUsers });

    let admins = [];
    for (let i = 0; i < adminUsers.length; i++)
      admins.push(
        await User.findOne({ _id: adminUsers[i].split("-")[0] }).select(
          "username profilePicture"
        )
      );

    return res.status(200).json({ admins });
  } catch (error) {
    console.log("GetAdminsException: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {};

export const generateRandomMessage = async (req, res) => {
  try {
    connect();
    // const { content } = req.body;

    const chatId = "6654f3b9afd6c87ff78557ac";
    const category = "text";

    const { users, adminUsers } = await Chat.findOne({ _id: chatId }).select(
      "users adminUsers"
    );

    const message = await Message.create({
      chatId,
      category,
      content: shuffle(messages)[0],
      sender: shuffle([...users, ...adminUsers])[0].split("-")[0],
    });

    return res.status(200).json({ message });
  } catch (error) {
    console.log("GenerateRandomMessageException: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const setRandomLatestMessage = async (req, res) => {
  try {
    connect();
    const chats = await Chat.find();
    let i = 0;
    chats.forEach(async (element) => {
      const cht = await Chat.findOneAndUpdate(element._id, {
        chatName: names[i++],
      });
    });

    return res.status(200).json({ chats });
  } catch (error) {
    console.log("RandomLatestMessageException:", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    connect();
    const { chatId } = req.params;
    const messages = (await Message.find({ chatId })).reverse();
    console.log({ messages });
    return res.status(200).json(messages);
  } catch (error) {
    console.log("GetMessagesException: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const createChat = async (req, res) => {
  try {
    connect();
    const { users, isGroupChat, latestMessage, adminUsers, chatName } =
      req.body;

    let chat = null;
    if (isGroupChat)
      chat = await Chat.create({
        users,
        isGroupChat,
        adminUsers,
        chatName,
        isActive: true,
      });
    else
      chat = await Chat.create({
        users,
        isGroupChat,
        latestMessage,
        isActive: true,
      });

    return res.status(201).json({ chat });
  } catch (error) {
    console.log("CreateChatException: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const deactivateChat = async (req, res) => {
  try {
    connect();
    const { chatId } = req.body;

    await Chat.findByIdAndUpdate(chatId, { $set: { isActive: false } });

    return res.status(200).json({ message: "Chat Deactivated." });
  } catch (error) {
    console.log("DeactivateChatException: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const activateChat = async (req, res) => {
  try {
    connect();
    const { chatId } = req.body;

    await Chat.findByIdAndUpdate(chatId, { $set: { isActive: true } });

    return res.status(200).json({ message: "Chat Activated." });
  } catch (error) {
    console.log("ActivateChatException: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteChat = async (req, res) => {
  try {
    connect();
    const { chatId } = req.params;

    await Chat.findByIdAndDelete(chatId);
    await Message.deleteMany({ chatId });

    return res.status(200).json({ message: "Chat has been vanished." });
  } catch (error) {
    console.log("DeleteChatException: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteChatWithWord = async (req, res) => {
  try {
    connect();
    const word = req.query.word;

    if (!word) {
      return res
        .status(400)
        .json({ message: "Word query parameter is required." });
    }
    const regex = new RegExp(word, "i");
    const chatsToDelete = await Chat.find({ chatName: regex });
    const chatIdsToDelete = chatsToDelete.map((chat) => chat._id);

    await Chat.deleteMany({ chatName: regex });

    await Message.deleteMany({ chatId: { $in: chatIdsToDelete } });

    return res.status(200).json({ message: "Chats have been vanished." });
  } catch (error) {
    console.log("DeleteChatException: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const addAdmin = async (req, res) => {
  try {
    connect();
    const { user, chatId } = req.body;

    await Chat.findByIdAndUpdate(chatId, {
      $pull: { users: user },
      $push: { adminUsers: user },
    });

    return res.status(201).json({ message: "Admin created successfully." });
  } catch (error) {
    console.log("AddAdminException: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const removeAdmin = async (req, res) => {
  try {
    connect();
    const { user, chatId } = req.body;

    await Chat.findByIdAndUpdate(chatId, {
      $push: { users: user },
      $pull: { adminUsers: user },
    });

    return res.status(200).json({ message: "Admin removed successfully." });
  } catch (error) {
    console.log("RemoveAdminException: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const changeGroupName = async (req, res) => {
  try {
    connect();
    const { chatName, chatId } = req.body;

    await Chat.findByIdAndUpdate(chatId, { $set: { chatName } });

    return res.status(201).json({ message: "Group name changed." });
  } catch (error) {
    console.log("ChangeGroupNameException: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const changeGroupProfileImage = async (req, res) => {
  try {
    connect();
    const { profileImage, chatId } = req.body;

    await Chat.findByIdAndUpdate(chatId, { $set: { profileImage } });

    return res.status(201).json({ message: "Profile image changed." });
  } catch (error) {
    console.log("ChangeGroupImageException: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const createMessage = async (req, res) => {
  try {
    connect();
    const { chatId, content, taggedUsers, category, sender } = req.body;

    let message = null;
    if (category == "text")
      message = await Message.create({
        chatId,
        content,
        taggedUsers,
        category,
        sender,
      });
    const { chatId: id, ...filteredMessage } = message;
    await Chat.findByIdAndUpdate(chatId, {
      $inc: { unseenMessageCount: 1 },
      $set: { latestMessage: content },
    });

    return res.status(201).json({ message });
  } catch (error) {
    console.log("CreateMessageException: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    connect();
    const { messageId, chatId } = req.body;
    await Message.findByIdAndDelete(messageId);
    await Chat.findByIdAndUpdate(chatId, {
      $inc: { unseenMessageCount: -1 },
    });
    return res.status(200).json({ message: "Message deleted." });
  } catch (error) {
    console.log("DeleteMessageException: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const joinGroup = async (req, res) => {
  try {
    connect();
    const { chatId, user } = req.body;
    await Chat.findByIdAndUpdate(chatId, { $push: { users: user } });
    return res.status(200).json({ message: "Added to the group." });
  } catch (error) {
    console.log("JoinGroupException: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const leaveGroup = async (req, res) => {
  try {
    connect();
    const { chatId, user } = req.body;
    await Chat.findByIdAndUpdate(chatId, { $pull: { users: user } });
    return res.status(200).json({ message: "Left the group." });
  } catch (error) {
    console.log("LeaveGroupException: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const kickoutGroup = async (req, res) => {
  try {
    connect();
    const { chatId, user, admin } = req.body;

    const isAdmin = await Chat.findOne(chatId, { adminUsers: admin });
    if (!isAdmin)
      return res.status(401).json({ message: "Only admin can kick anyone." });

    await Chat.findByIdAndUpdate(chatId, { $pull: { users: user } });
    return res.status(200).json({
      message: `${admin.split("-")[1]} kicked out ${user.split("-")[1]}.`,
    });
  } catch (error) {
    console.log("LeaveGroupException: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};
