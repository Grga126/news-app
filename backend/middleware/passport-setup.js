import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import User from "../models/user.js";
import dotenv from "dotenv";
dotenv.config();

const serialize = passport.serializeUser((user, done) => {
  if (!user) return done(err, null);
  done(null, JSON.stringify(user.accessToken));
});

const deserialize = passport.deserializeUser((accessToken, done) => {
  User.findOne({ accessToken })
    .then((user) => {
      done(null, JSON.parse(user));
    })
    .catch((err) => {
      done(err, null);
    });
});

const googleStrategy = passport.use(
  new GoogleStrategy(
    {
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
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
          username: profile.emails[0].value,
          email: profile.emails[0].value,
          accessToken: accessToken,
          loginType: process.env.GOOGLE_ACCOUNT,
        });

        done(null, newUser);
      }
    }
  )
);

export { serialize, deserialize, googleStrategy };
