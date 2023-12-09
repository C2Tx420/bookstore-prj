import { createSlice } from '@reduxjs/toolkit'
import { bookModel } from '../../types/book.model'
import { addBookAction, getBookDetailAction, getBookListAction } from './action';

export interface authState {
    list: Array<bookModel| string>;
    detail?: bookModel | any
}

const initialState: authState = {
    list: [],
}

export const authSlide = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBookListAction.fulfilled, (state, action) => {
            state.list = action.payload;
        });
        builder.addCase(getBookDetailAction.fulfilled, (state, action) => {
            state.detail = action.payload;
        });
        builder.addCase(addBookAction.fulfilled, (state, action) => {
            state.list = [...state.list, ...action.payload];
        });
    },
})

const authReducer = authSlide.reducer;

export default authReducer;