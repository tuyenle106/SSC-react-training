import { configureStore } from '@reduxjs/toolkit';

// import appReducer from './slices/appSlice';
import todoReducer from './slices/todoSlice';

export const store = configureStore({
	reducer: {
		// app: appReducer,
		todos: todoReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
