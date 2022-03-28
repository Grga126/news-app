import User from "../models/user.js";
import { StatusCodes } from "http-status-codes";

const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new Error("Bad request");
  }
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

export { register };
