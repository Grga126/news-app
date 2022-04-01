import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Unesite korisnicko ime"],
    minlength: 3,
    maxlength: 20,
    trim: true,
    unique : true
  },
  email: {
    type: String,
    required: [true, "Unesite email"],
    validate: {
      validator: validator.isEmail,
      message: "Unesite validan email",
    },
    unique: true,
  },
  encryptedPassword: {
    type: String,
    required: true,
    minlength: 5,
    select: false,
  },
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

export default mongoose.model("User", UserSchema);
