import { createAsyncThunk } from '@reduxjs/toolkit'
import { setloading } from '../loading/reducer'
const loginAction = createAsyncThunk('auth/login', async (loginData: {username: string, password: string}, { dispatch }) => {
    dispatch(setloading(true));
    try {
        console.log(loginData);
        throw new Error('a')
        return 'aaa';
    } catch (e: any) {
        throw new Error(e.message);
    } finally {
        dispatch(setloading(false));
    }
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const logoutAction = createAsyncThunk('auth/logout', async (_,{dispatch}) => {
    dispatch(setloading(true));
    try {
        return null;
    } catch (e: any) {
        throw new Error(e.message);
    } finally {
        dispatch(setloading(false));
    }
})

export { loginAction };