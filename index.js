const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const todoRoutes = require("./routes/todoRoutes.js");
const authRoutes = require("./routes/authRoutes.js");

const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

app.use("/", todoRoutes);
app.use("/", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
