import dotenv from "dotenv";
dotenv.config();

export const authCheck = (req, res) => {
  if (req.user) {
    return true;
  }
  return res.redirect(`${process.env.FRONTEND}/login`);
};
