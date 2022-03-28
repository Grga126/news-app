import express from "express";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
var app = express();

import dotenv from "dotenv";
import connectDB from "./db/connect.js";
dotenv.config();
import "express-async-errors";

import authRouter from "./routes/auth-routes.js";

app.use(express.json());

app.use("/api/auth", authRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server running on port ${port}!`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
