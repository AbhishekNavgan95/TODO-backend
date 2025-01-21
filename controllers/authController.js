const { users } = require("../database/db");
const jwt = require("jsonwebtoken");
const secretToken = "token";

exports.getToken = (req, res) => {
  try {
    const { email, firstName, lastName, gender, language } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const ifExists = users.find((user) => user.email === email);
    if (ifExists) {
      return res.status(403).json({ message: "User already exists" });
    }

    const token = jwt.sign({ email }, secretToken, { expiresIn: "1h" });

    const createdUser = { email, firstName, lastName, gender, language }

    users.push(createdUser);

    return res
      .status(200)
      .json({ data: createdUser, token, message: "User registered successfully" });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

exports.getUsers = (req, res) => {
  try {
    return res
      .status(200)
      .json({ users, message: "Users retrieved successfully" });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};
