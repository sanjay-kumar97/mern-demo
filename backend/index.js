const express = require("express");
const { PORT } = require("./config");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from Server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
