import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { loginAction } from './action'

export interface authState {
    token: string | null
}

const initialState: authState = {
    token: null,
}

export const authSlide = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAction.fulfilled, (state,action: PayloadAction<string>) => {
            state.token = action.payload;
        })
    },
})

export const { logout } = authSlide.actions

const authReducer = authSlide.reducer;

export default authReducer;