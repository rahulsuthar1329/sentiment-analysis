import express from "express";
import userRoutes from "./routes/authRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import SocketService from "./sockets/socket.js";

dotenv.config();
const port = process.env.PORT || 3003;

const app = express();
const socketService = new SocketService();
const server = http.createServer(app);

const corsOptions = {
  origin: [
    "https://sentiment-analysis-frontend-taupe.vercel.app",
    "http://localhost:3000",
    "http://192.168.66.132:8081",
  ],
  "Access-Control-Allow-Credentials": true,
  credentials: true, //access-control-allow-credentials:true
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(express.urlencoded());
app.use(cors(corsOptions));

app.use("/auth", userRoutes);
app.use("/chat", chatRoutes);

socketService.io.attach(server);
socketService.initListeners();

app.get("/", (_, res) => {
  res.send("Welcome to GenieCart!");
});

server.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Listening at port ${port}`);
});
