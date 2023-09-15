import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    otp: {
      type: String,
      default: "",
    },
    createdAt: { type: Date, expires: "10m", default: Date.now },
  },
  { timestamps: true }
);

const Verification = mongoose.model("Verfication", otpSchema); // collection created

export default Verification;
