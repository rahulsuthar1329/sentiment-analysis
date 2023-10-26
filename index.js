import express from "express";
import userRoutes from "./routes/authRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3003;
const app = express();

const corsOptions = {
  origin: ["https://sentiment-analysis-frontend-taupe.vercel.app/"],
};

// Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors(corsOptions));

// Routes
app.use("/auth", userRoutes);

// sample api
app.get("/", (req, res) => {
  res.send("Welcome to GenieCart!");
});

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Listening at port ${port}`);
});
