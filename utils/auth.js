import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateAccessToken = async (uniqueId) => {
  return jwt.sign({ uniqueId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export const verifyToken = (req, res, next) => {
  try {
    let token = req.headers["authorization"];
    if (!token) return res.status(403).send("Access Denied.");
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    console.log(verified);
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
