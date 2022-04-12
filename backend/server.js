import express from "express";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import cors from "cors";
import cookieSession from "cookie-session";
import {
  serialize,
  deserialize,
  googleStrategy,
} from "./middleware/passport-setup.js";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import "express-async-errors";
import morgan from "morgan";
import authRouter from "./routes/auth-routes.js";
import passport from "passport";

var app = express();

dotenv.config();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

if (app.get("env") === "production") {
  session.cookie.secure = true;
}

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_SESSION],
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.use("/auth", authRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port);
  } catch (error) {
    console.log(error);
  }
};

start();
