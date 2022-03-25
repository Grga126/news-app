import express from "express";
import notFoundMiddleware from "./middleware/not-found.js";
var app = express();

app.use(notFoundMiddleware);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}!`);
});
