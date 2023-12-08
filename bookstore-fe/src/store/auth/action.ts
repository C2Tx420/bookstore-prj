import { createAsyncThunk } from '@reduxjs/toolkit'
import { setloading } from '../loading/reducer'
const loginAction = createAsyncThunk('auth/login', async (loginData: any, { dispatch }) => {
    dispatch(setloading(true));
    try {
        console.log(loginData);
        return loginData;
    } catch (e: any) {
        throw new Error(e.message);
    } finally {
        dispatch(setloading(false));
    }
})

export { loginAction };