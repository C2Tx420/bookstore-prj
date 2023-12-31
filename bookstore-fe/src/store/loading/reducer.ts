import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: boolean = false;

export const loadingSlide = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setloading: (state,action: PayloadAction<boolean>) => {
            state = action.payload;
            return state;
        }
    },
})

export const { setloading } = loadingSlide.actions

const loadingReducer = loadingSlide.reducer;

export default loadingReducer;