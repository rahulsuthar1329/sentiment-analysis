import { connect } from "mongoose";
import { Server as SocketIOServer } from "socket.io";

let io;

function initializeSocket(server) {
  io = SocketIOServer(server);

  io.on("connection", (socket) => {
    console.log("New client connected: " + socket.id);
    connect();

    socket.on("sendMessage", (message) => {
      saveMessageToDatabase(message)
        .then((savedMessage) => {
          io.emit("messageReceived", savedMessage);
        })
        .catch((error) => {
          console.error("Error saving message:", error);
        });
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected: " + socket.id);
    });
  });

  return io;
}

export { initializeSocket };
