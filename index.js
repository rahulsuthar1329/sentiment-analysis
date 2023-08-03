import express from "express";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3003;
// const port = 3003;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Routes
app.use("/auth", userRoutes);

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Listening at port ${port}`);
});
