import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 3,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
    },
    username: {
      type: String,
      min: 5,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    mobile: {
      type: String,
      default: "",
    },
    profilePicture: {
      type: String,
      default: "",
    },
    dateOfBirth: {
      type: String,
      default: "",
    },
    country: {
      type: String,
      default: "",
    },
    wishlist: {
      type: Array,
      default: [],
    },
    likedProducts: {
      type: Array,
      ref: "products",
      default: [],
    },
    savedAddress: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema); // collection created

export default User;
