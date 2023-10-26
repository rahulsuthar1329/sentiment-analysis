import { Schema, model } from "mongoose";

const otpSchema = new Schema(
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

const Verification = model("Verfication", otpSchema); // collection created

export default Verification;
