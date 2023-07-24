import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      min: 3,
      required: true,
    },
    lastName: {
      type: String,
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
    profilePicture: {
      type: String,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
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
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;
