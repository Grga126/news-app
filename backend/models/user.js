import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Unesite korisnicko ime"],
    minlength: 3,
    maxlength: 30,
    trim: true,
  },
  googleID : {
    type : String,
    unique : true
  },

  email: {
    type: String,
    required : true,
    validate: {
      validator: validator.isEmail,
      message: "Unesite validan email",
    },
  },
  encryptedPassword: {
    type: String,
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
