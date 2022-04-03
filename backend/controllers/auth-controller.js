import User from "../models/user.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../errors/index.js";
import encryptPassword from "../utilty/encrypt-password.js";
import decryptPassword from "../utilty/decrypt-password.js";

const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new BadRequestError("Popunite sva polja");
  }

  const encryptedPassword = encryptPassword(password);

  const user = await User.create({ username, encryptedPassword, email });

  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      username: user.username,
    },
  });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Popunite sva polja");
  }

  const user = await User.findOne({
    username: username,
  }).select("+encryptedPassword");

  if (!user) {
    throw new UnauthenticatedError("Pogresni kredencijali");
  }

  if (password !== decryptPassword(user.encryptedPassword)) {
    throw new UnauthenticatedError("Pogresni kredencijali");
  }

  const token = user.createJWT();

  user.encryptedPassword = undefined;
  res.status(StatusCodes.OK).json({ user, token });
};

const googleAuthRedirect = (req, res) => {
  res.send("uspesno");
};

export { register, login, googleAuthRedirect };
