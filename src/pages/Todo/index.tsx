import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState("");
  const [filter, setFilter] = useState("all"); // all, active, completed

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  // Save todos to localStorage on todos change
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  // Add new todo
  const addTodo = () => {
    if (newTodoText.trim()) {
      const newTodo = {
        id: Date.now(),
        text: newTodoText,
        completed: false,
        date: new Date().toLocaleString(), // Adding date of creation
      };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setNewTodoText("");
    }
  };

  // Toggle todo completion status
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Delete todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Filter todos based on selected filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <>
      <div className="flex items-center justify-center bg-gradient-to-r from-[#f5f7fa] to-[#e4ecf7] min-h-[550px]">
        <div className="lg:w-180 mx-auto my-6 p-6 bg-white rounded-lg shadow-xl">
          <h1 className="text-3xl text-center font-bold text-indigo-600 mb-6">
            Todo List
          </h1>

          {/* Add input */}
          <div className="flex space-x-2 mb-8">
            <input
              type="text"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              placeholder="Enter a new todo"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={addTodo}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all cursor-pointer flex items-center space-x-2"
            >
              <IoIosAddCircleOutline size={22} />
              <span>Add</span>
            </button>
          </div>

          {/* Filter  */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 bg-gray-200 text-gray-800 rounded-md transition-all cursor-pointer
                ${
                  filter === "all"
                    ? "bg-green-500 text-white"
                    : "hover:bg-gray-300"
                }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("active")}
              className={`px-4 py-2 bg-gray-200 text-gray-800 rounded-md transition-all cursor-pointer
                ${
                  filter === "active"
                    ? "bg-green-500 text-white"
                    : "hover:bg-gray-300"
                }`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-4 py-2 bg-gray-200 text-gray-800 rounded-md transition-all cursor-pointer
                ${
                  filter === "completed"
                    ? "bg-green-500 text-white"
                    : "hover:bg-gray-300"
                }`}
            >
              Completed
            </button>
          </div>

          {/* Todo list */}
          <div className="space-y-4">
            {filteredTodos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm"
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer"
                  />
                  <span
                    className={`flex-1 text-lg font-semibold ${
                      todo.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {todo.text}
                  </span>
                </div>

                <span className="text-sm text-gray-500 mx-4">
                  Added: {todo.date}
                </span>

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700 transition-all cursor-pointer"
                >
                  <MdDelete size={22} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoPage;
