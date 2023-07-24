import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3003;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Routes
app.use("/auth", userRoutes);

app.get("/", (req, res) => {
  res.json("Welcome to GenieCart!");
});

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Listening at port ${port}`);
});
