import express from "express";
import userRoutes from "./routes/authRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3003;
const app = express();

const corsOptions = {
  origin: [
    "https://sentiment-analysis-frontend-taupe.vercel.app",
    "http://localhost:3000",
    "http://192.168.114.73:8081",
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

app.get("/", (req, res) => {
  res.send("Welcome to GenieCart!");
});

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Listening at port ${port}`);
});
