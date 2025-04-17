import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  setFilter,
  undo,
  redo,
  Todo,
} from "../../store/slices/todoSlice";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdUndo, MdRedo } from "react-icons/md";

const TodoPage: React.FC = () => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("General");
  const [priority, setPriority] = useState("Medium");

  const dispatch = useDispatch();

  const todos = useSelector((state: RootState) => state.todos.todos);
  const filter = useSelector((state: RootState) => state.todos.filter);
  const canUndo = useSelector(
    (state: RootState) => state.todos.history.length > 0
  );
  const canRedo = useSelector(
    (state: RootState) => state.todos.future.length > 0
  );

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text,
        completed: false,
        date: new Date().toISOString(),
        category,
        priority: priority as "High" | "Medium" | "Low",
      };
      dispatch(addTodo(newTodo));
      setText("");
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="bg-gradient-to-r from-[#f5f7fa] to-[#e4ecf7] py-10 min-h-145">
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Todo List
        </h1>

        {/* Input Section */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter todo..."
              className="border px-4 py-2 rounded-md flex-1"
            />

            <button
              onClick={handleAdd}
              className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2"
            >
              <IoIosAddCircleOutline size={20} />
              Add Todo
            </button>
          </div>
          <div className="flex gap-4">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border px-4 py-2 rounded-md w-full"
            >
              <option value="General">General</option>
              <option value="Work">Work</option>
              <option value="Study">Study</option>
              <option value="Home">Home</option>
            </select>

            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="border px-4 py-2 rounded-md w-full"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center mb-4 gap-4">
          <div className="flex gap-2">
            {(["all", "active", "completed"] as const).map((f) => (
              <button
                key={f}
                onClick={() => dispatch(setFilter(f))}
                className={`cursor-pointer px-3 py-1 rounded-md text-sm ${
                  filter === f
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          {/* Undo / Redo */}
          <div className="flex gap-2">
            <button
              disabled={!canUndo}
              onClick={() => dispatch(undo())}
              className={`cursor-pointer px-3 py-1 rounded-md text-sm flex items-center gap-1 ${
                canUndo
                  ? "bg-yellow-400 hover:bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              <MdUndo size={16} />
              Undo
            </button>
            <button
              disabled={!canRedo}
              onClick={() => dispatch(redo())}
              className={`cursor-pointer px-3 py-1 rounded-md text-sm flex items-center gap-1 ${
                canRedo
                  ? "bg-blue-400 hover:bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              <MdRedo size={16} />
              Redo
            </button>
          </div>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-md"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleTodo(todo.id))}
                  className="w-5 h-5 cursor-pointer"
                />
                <div>
                  <p
                    className={`font-medium text-lg ${
                      todo.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {todo.text}
                  </p>
                  <p
                    className={`text-xs ${
                      todo.priority === "Low"
                        ? "text-green-500"
                        : todo.priority === "Medium"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {todo.category} - Priority: {todo.priority}
                  </p>
                </div>
              </div>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="cursor-pointer text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
