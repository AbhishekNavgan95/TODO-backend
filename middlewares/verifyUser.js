const { users } = require("../database/db");
const jwt = require("jsonwebtoken");
const secretToken = "token";

exports.verifyUser = (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ message: "You are not authorized to access this resourse" });
    }

    const decoded = jwt.verify(token, secretToken);

    const user = users.find((user) => user.email === decoded?.email);

    if (!user) {
      return res
        .status(401)
        .json({ message: "You are not authorized to access this resourse" });
    }

    req.user = user;

    next();
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};
