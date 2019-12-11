// code away!
const express = require("express");
const logger = require("./middleware/logger");
const postRouter = require("./posts/postRouter");
const userRouter = require("./users/userRouter");

const server = express();

server.use(logger);
server.use(express.json());

server.use("/api/posts", postRouter);
server.use("/api/user", userRouter);

server.use((req, res) => {
  res.status(404).json({
    message: "Route was not found"
  });
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "An internal error occurred, please try again later."
  });
});

server.listen(8080, () => {
  console.log("\n*** Server Running on http://localhost:8080 ***\n");
});
