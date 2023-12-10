import { createAsyncThunk } from "@reduxjs/toolkit";
import { setloading } from "../loading/reducer";
import { supabase } from "../../config/supabase";

const getBookListAction = createAsyncThunk('book/getList', async (_, { dispatch }) => {
    dispatch(setloading(true));
    try {
        const { data }: any = await supabase
            .from('books')
            .select('uuid, title, image')

        return data;
    } catch (e: any) {
        throw new Error(e.message)
    } finally {
        dispatch(setloading(false));
    }
});

const getBookDetailAction = createAsyncThunk('book/getDetail', async (id, { dispatch }) => {
    dispatch(setloading(true));
    try {
        const { data }: any = await supabase
            .from('books')
            .select('*')
            .eq('uuid', id)
        return data;
    } catch (e: any) {
        throw new Error(e.message)
    } finally {
        dispatch(setloading(false));
    }
});

const addBookAction = createAsyncThunk('book/addBook', async (bookData: any, { dispatch }) => {
    dispatch(setloading(true));
    try {
        const { data }: any = await supabase
            .from('books')
            .insert(bookData)
        return data;
    } catch (e: any) {
        throw new Error(e.message)
    } finally {
        dispatch(setloading(false));
    }
});

export { getBookListAction, getBookDetailAction, addBookAction }