const express = require("express");
const app = express();

const taskRouter = require("./routes/taskRoutes");

const {
  MONGO_IP,
  MONGO_PORT,
  MONGO_USER,
  MONGO_PASSWORD,
} = require("./config/config");

const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const mongoose = require("mongoose");

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Successfully Connected to MongoDB");
  })
  .catch((e) => {
    console.log("Error trying to connect MongoDB", e);
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello world using Express and Docker Compose..</h1>");
});

app.use("/api/v1/tasks", taskRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
