import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const STORAGE_KEY = "redux_todos";

export const saveTodosToLocalStorage = (todos: Todo[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

export const loadTodosFromLocalStorage = (): Todo[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export type Priority = "High" | "Medium" | "Low";

type FilterType = "all" | "active" | "completed";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  date: string;
  category: string;
  priority: Priority;
}

type TodosState = {
  todos: Todo[];
  history: Todo[][];
    future: Todo[][];
  filter: FilterType;
};

const initialState: TodosState = {
  todos: loadTodosFromLocalStorage(),
  history: [],
    future: [],
  filter: "all",
};



const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.history.push(state.todos); // Save previous state
      state.todos = [...state.todos, action.payload];
          state.future = []; // Clear redo
          saveTodosToLocalStorage(state.todos);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      state.history.push(state.todos);
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
        state.future = [];
        saveTodosToLocalStorage(state.todos);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.history.push(state.todos);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        state.future = [];
        saveTodosToLocalStorage(state.todos);
    },
    undo: (state) => {
      const prev = state.history.pop();
      if (prev) {
        state.future.push(state.todos);
          state.todos = prev;
          saveTodosToLocalStorage(state.todos);
      }
    },
    redo: (state) => {
      const next = state.future.pop();
      if (next) {
        state.history.push(state.todos);
          state.todos = next;
          saveTodosToLocalStorage(state.todos);
      }
      },
    
     setFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, undo, redo, setFilter } = todoSlice.actions;

export default todoSlice.reducer;
