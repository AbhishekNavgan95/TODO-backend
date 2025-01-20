const express = require("express");
const router = express.Router();

const { getToken, getUsers } = require("../controllers/authController");

router.get("/token", getToken);
router.get("/users", getUsers);

module.exports = router;
