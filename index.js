// code away!
const express = require("express");
const logger = require("./middleware/logger");
const postRouter = require("./posts/postRouter");
const userRouter = require("./users/userRouter");
const cors = require("cors");

const server = express();

server.use(cors());
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

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;

server.listen(port, host, () => {
  console.log("app running");
});
