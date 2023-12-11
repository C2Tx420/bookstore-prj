import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { loginAction, logoutAction, registerAction } from './action'


export const authSlide = createSlice({
    name: 'auth',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerAction.rejected, (_, action: any)=>{
            throw new Error(action.error.message)
        })
        builder.addCase(registerAction.fulfilled, ()=>{
            return;
        })
        builder.addCase(loginAction.rejected, (_, action: any)=>{
            throw new Error(action.error.message)
        })
        builder.addCase(loginAction.fulfilled, (state, action: PayloadAction<any>) => {
            state = action.payload;
            return state;
        });
        builder.addCase(logoutAction.fulfilled, (state) => {
            state = {};
            return state
        });
    },
})

const authReducer = authSlide.reducer;

export default authReducer;