import express from "express";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
var app = express();

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.get("/", (req, res) => {
  res.send("")
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});
