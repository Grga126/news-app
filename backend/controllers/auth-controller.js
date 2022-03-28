import User from "../models/user.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

export { register };
