import { createSlice } from '@reduxjs/toolkit';

interface IAppState {
	count: number;
}

const initialState: IAppState = {
	count: 0,
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		increment: (state) => {
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
		},
	},
});

export const { increment, decrement } = appSlice.actions;

export default appSlice.reducer;
