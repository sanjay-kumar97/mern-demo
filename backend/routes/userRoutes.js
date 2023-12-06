const express = require("express");

const User = require("../models/UsersModel");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { name, age, gender, profession } = req.body;

    if (!name || !age || !gender || !profession) {
      return res.status(400).send({ message: "All fields are required!" });
    }

    const newUser = { name, age, gender, profession };

    const user = await User.create(newUser);

    return res.status(200).send({
      message: "User added successfully!",
      userId: user["_doc"]["_id"],
    });
  } catch (err) {
    console.log("Error posting data to DB", err);
    res
      .status(400)
      .send({ message: "Couldn't write to DB", stackTrace: err.message });
  }
});

router.get("/view", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({ message: "Read success!", data: users });
  } catch (err) {
    console.log("Error getting data from DB", err);
    res
      .status(400)
      .send({ message: "Couldn't read from DB", stackTrace: err.message });
  }
});

router.get("/view/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) return res.status(400).send({ message: "User not found!" });

    return res.status(200).send({ message: "Read success!", data: user });
  } catch (err) {
    console.log("Error getting data from DB", err);
    res
      .status(400)
      .send({ message: "Couldn't read from DB", stackTrace: err.message });
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, gender, profession } = req.body;

    if (!name || !age || !gender || !profession) {
      return res.status(400).send({ message: "All fields are required!" });
    }

    const modifiedUser = { name, age, gender, profession };
    const user = await User.findByIdAndUpdate(id, modifiedUser);

    if (!user) return res.status(400).send({ message: "User not found!" });

    return res.status(200).send({ message: "Update success!" });
  } catch (err) {
    console.log("Error putting data to DB", err);
    res
      .status(400)
      .send({ message: "Couldn't update in DB", stackTrace: err.message });
  }
});

router.delete("/remove/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if (!user) return res.status(400).send({ message: "User not found!" });

    return res.status(200).send({ message: "Delete success!" });
  } catch (err) {
    console.log("Error deleting data from DB", err);
    res
      .status(400)
      .send({ message: "Couldn't remove from DB", stackTrace: err.message });
  }
});

module.exports = router;
