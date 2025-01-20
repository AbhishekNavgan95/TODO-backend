const express = require("express");
const router = express.Router();

const {
  getTodo,
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoControllers");
const { verifyUser } = require("../middlewares/verifyUser");

router.get("/tasks", verifyUser, getTodos);
router.get("/tasks/:id", verifyUser, getTodo);
router.post("/tasks", verifyUser, createTodo);
router.put("/tasks/:id", verifyUser, updateTodo);
router.delete("/tasks/:id", verifyUser, deleteTodo);

module.exports = router;
