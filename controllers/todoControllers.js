const { todos } = require("../database/db");
const { v4: uuidv4 } = require("uuid");

exports.getTodo = (req, res) => {
  try {
    const { id } = req.params;

    const todo = todos.find((todo) => todo?.id === id);

    if(todo.user !== req.user?.email) {
      return res.status(403).json({ message: "You are not authorized to access this resourse" });
    }

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res
      .status(200)
      .json({ data: todo, message: "todo fetched successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getTodos = (req, res) => {
  try {
    const { page = 1, limit = 10, sort = "true" } = req.query;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const userTodos = todos.filter((todo) => todo.user === req.user?.email)

    const paginatedTodos = userTodos.slice(startIndex, endIndex);

    const sortedTodos = paginatedTodos.sort((a, b) => {
      if (sort === "true") {
        return a.createdAt - b.createdAt;
      } else {
        return b.createdAt - a.createdAt;
      }
    });

    if (sortedTodos.length === 0) {
      return res.status(404).json({ message: "todos not found" });
    }

    return res
      .status(200)
      .json({ data: sortedTodos, message: "todos fetched successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.createTodo = (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const todo = {
      id: uuidv4(),
      user: req.user?.email,
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };

    todos.push(todo);

    return res
      .status(201)
      .json({ data: todo, message: "todo created successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateTodo = (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed = false } = req.body;

    const todo = todos.find((todo) => todo?.id === id);

    if(todo.user !== req.user?.email) {
      return res.status(403).json({ message: "You are not authorized to access this resourse" });
    }

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    if (title) {
      todo.title = title;
    }

    if (description) {
      todo.description = description;
    }

    todo.completed = completed;

    return res
      .status(200)
      .json({ data: todo, message: "todo updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteTodo = (req, res) => {
  try {
    const { id } = req.params;

    const todo = todos.find((todo) => todo?.id === id);

    if(todo.user !== req.user?.email) {
      return res.status(403).json({ message: "You are not authorized to access this resourse" });
    }

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todos.splice(todos.indexOf(todo), 1);

    return res
      .status(200)
      .json({ data: todo, message: "todo deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
