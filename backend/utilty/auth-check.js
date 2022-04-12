import { StatusCodes } from "http-status-codes";
import dotenv from "dotenv";
dotenv.config();

export const authCheck = (req, res) => {
  if (req.user) {
    return true;
  }
  return res.status(StatusCodes.UNAUTHORIZED).json({ msg : "Unauthorized"});
};
