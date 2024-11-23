import express from "express";
import userRoutes from "./routes/authRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import { handleSocketConnection } from "./sockets/socketHandlers.js";

dotenv.config();
const port = process.env.PORT || 3003;

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server);

io.on("connection", (socket) => {
  handleSocketConnection(socket, io);
});

const corsOptions = {
  origin: [
    "https://sentiment-analysis-frontend-taupe.vercel.app",
    "http://localhost:3000",
    "http://192.168.3.73:8081",
  ],
  "Access-Control-Allow-Credentials": true,
  credentials: true, //access-control-allow-credentials:true
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(express.urlencoded());
app.use(cors(corsOptions));
app.use(cors({ origin: "*" }));

function handleControllerError(err, req, res, next) {
  console.log("ERROR : ", err.message);
  console.error("stacked error: ", err.stack); // Log the error stack for debugging

  // Craft a user-friendly error response:
  res.status(err.statusCode || 500).json({
    message: "An error occurred.", // Customize based on your needs
  });
}

app.use("/auth", userRoutes);
app.use("/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to GenieCart!");
});

server.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Listening at port ${port}`);
});
