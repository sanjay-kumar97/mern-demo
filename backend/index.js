const express = require("express");
const mongoose = require("mongoose");

const apiRoutes = require("./routes/api.js");
const { PORT, mongoURL } = require("./config");

const app = express();

app.use(express.json());

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Hello World from Server!");
});

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Mongo DB connection success!");
    app.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to Database!", err.message);
  });
