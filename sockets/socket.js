import { Server } from "socket.io";
import Redis from "ioredis";
import * as Credential from "../config/credential.js";

const redisConfig = {
  host: Credential.REDIS_HOST,
  port: Credential.REDIS_PORT,
  username: Credential.REDIS_USERNAME,
  password: Credential.REDIS_PASSWORD,
};

const pub = new Redis(redisConfig);
const sub = new Redis(redisConfig);

class SocketService {
  constructor() {
    console.log("Init Socket Service...");
    this._io = new Server({
      cors: { allowedHeaders: ["*"], origin: "*" },
    });
    sub.subscribe("MESSAGES");
  }

  initListeners() {
    const io = this.io;
    console.log("Init Socket Listeners...");

    io.on("connection", (socket) => {
      console.log(`New Socket Connected`, socket.id);
      socket.on("newMessage", async ({ message }) => {
        console.log("New Message Rec.", message);
        await pub.publish("MESSAGES", JSON.stringify({ message }));
      });
    });

    sub.on("message", async (channel, message) => {
      if (channel === "MESSAGES") {
        console.log("new message from redis", message);
        io.emit("message", message);
      }
    });
  }

  get io() {
    return this._io;
  }
}

export default SocketService;
