import { createAsyncThunk } from '@reduxjs/toolkit'
import { setloading } from '../loading/reducer'
import { supabase } from '../../config/supabase';
const loginAction = createAsyncThunk('auth/login', async (loginData: {email: string, password: string}, { dispatch }) => {
    dispatch(setloading(true));
    try {
        const {data} = await supabase.auth.signInWithPassword(loginData);
        console.log(data);
        return data;
    } catch (e: any) {
        throw new Error(e.message);
    } finally {
        dispatch(setloading(false));
    }
})

const registerAction = createAsyncThunk('auth/login', async (registerData: {email: string, password: string}, { dispatch }) => {
    dispatch(setloading(true));
    try {
        const { data } = await supabase.auth.signUp(registerData);
        console.log(data);
        return;
    } catch (e: any) {
        throw new Error(e.message);
    } finally {
        dispatch(setloading(false));
    }
})

const logoutAction = createAsyncThunk('auth/logout', async (_,{dispatch}) => {
    dispatch(setloading(true));
    try {
        await supabase.auth.signOut();
        return null;
    } catch (e: any) {
        throw new Error(e.message);
    } finally {
        dispatch(setloading(false));
    }
})

export { loginAction, logoutAction, registerAction };