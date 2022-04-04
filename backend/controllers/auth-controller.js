import User from "../models/user.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../errors/index.js";
import encryptPassword from "../utilty/encrypt-password.js";
import decryptPassword from "../utilty/decrypt-password.js";
import { authCheck } from "../utilty/auth-check.js";

const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new BadRequestError("Popunite sva polja");
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Korisnik vec postoji");
  }

  const encryptedPassword = encryptPassword(password);

  const user = await User.create({ username, encryptedPassword, email });

  const token = user.createJWT();
  user.accessToken = token;

  const updatedUser = await User.findByIdAndUpdate(
    { _id: user._id },
    {
      $set: {
        accessToken: user.accessToken,
      },
    }
  )
    .then(() => {
      res.status(StatusCodes.CREATED).json({
        user: {
          email: user.email,
          username: user.username,
        },
      });
    })
    .catch((error) => {
      throw new BadRequestError(error);
    });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Popunite sva polja");
  }

  const user = await User.findOne({
    email: email,
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
  if (authCheck(req, res)) {
    res.cookie("token", req.user.accessToken)
    res.redirect("http://localhost:3000/dashboard");
  } else {
    res.redirect("http://localhost:3000/login");
  }
};

export { register, login, googleAuthRedirect };
