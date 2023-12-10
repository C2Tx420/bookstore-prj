import { createAsyncThunk } from '@reduxjs/toolkit'
import { setloading } from '../loading/reducer'
import { supabase } from '../../config/supabase';
const loginAction = createAsyncThunk('auth/login', async (loginData: { email: string, password: string }, { dispatch }) => {
    dispatch(setloading(true));
    const { data, error } = await supabase.auth.signInWithPassword(loginData);
    console.log(data.session);
    if (error) {
        throw new Error(error.message);
    } else {
        dispatch(setloading(false));
        return data.session;
    }
})

const registerAction = createAsyncThunk('auth/register', async (registerData: { email: string, password: string }, { dispatch }) => {
    dispatch(setloading(true));
    const { error } = await supabase.auth.signUp(registerData);
    if (error) {
        throw new Error(error.message);
    } else {
        dispatch(setloading(false));
        return;
    }
})

const logoutAction = createAsyncThunk('auth/logout', async (_, { dispatch }) => {
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