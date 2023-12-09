import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { loginAction, logoutAction, registerAction } from './action'

export interface authState {
    token: string | null
}

const initialState: authState = {
    token: null,
}

export const authSlide = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerAction.fulfilled, ()=>{
            return;
        })
        builder.addCase(loginAction.fulfilled, (state, action: PayloadAction<any>) => {
            state.token = action.payload;
        });
        builder.addCase(logoutAction.fulfilled, (state) => {
            state.token = null;
        });
    },
})

const authReducer = authSlide.reducer;

export default authReducer;