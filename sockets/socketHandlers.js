const handleSocketConnection = (socket, io) => {
  console.log("New client connected");

  socket.on("joinChat", (chatId) => {
    socket.join(chatId);
    console.log(`Client joined chat ${chatId}`);
    const message = {
      chatId: "123123",
      content: "Joined the chat Successfully!",
      seenBy: [],
      receivedBy: [],
      sender: "123123-Rahul Suthar",
      taggedUsers: [],
      category: "text",
      uri: "",
    };
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
};

const emitNewMessage = (io, chatId, message) => {
  io.to(chatId).emit("newMessage", message);
};

export { handleSocketConnection, emitNewMessage };
