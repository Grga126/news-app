import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import User from "../models/user.js";
import dotenv from "dotenv";
dotenv.config();

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((_id, done) => {
  User.findById({ _id }).then((user) => {
    done(null, user);
  });
});

export default passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
    },
    async (accessToken, refreshToken, profile, done) => {
      const alreadyUser = await User.findOne({
        email: profile.emails[0].value,
      });
      if (alreadyUser) {
        done(null, alreadyUser);
      } else {
        const newUser = await User.create({
          googleID: profile.id,
          username: profile.displayName,
          email: profile.emails[0].value,
        });

        done(null, newUser);
      }
    }
  )
);
