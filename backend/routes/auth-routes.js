import express from "express";
import passport from "passport";
const router = express.Router();

import {
  register,
  login,
  googleAuthRedirect,
} from "../controllers/auth-controller.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/google").get(
  passport.authenticate("google", {
    scope: [
      "openid",
      "email",
      "profile",
    ],
  })
);
router
  .route("/google/redirect")
  .get(passport.authenticate("google"), googleAuthRedirect);

export default router;
