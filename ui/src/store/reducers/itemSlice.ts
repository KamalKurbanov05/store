import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch, RootAppState } from '../index';
import { Dispatch } from 'react';




export const fetchItems = createAsyncThunk(
    'fetch data',
     async (_, thunkApi) => {
        try {
            console.log('we here!');
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            return response.json();
            // Array.isArray(items) && dispatch(addItems(items));
        } catch (err) {
            console.log(err);
        }
    }
)

export interface IItem {
    userId: number;
    readonly id: number;
    title: string;
    completed: boolean;
}

interface IinitialState { 
    items: IItem[]
}

const initialState: IinitialState = {
    items: []
}

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItems: (state, action: PayloadAction<IItem[]>) => {
            state.items = action.payload
        }
    },
    extraReducers: {
        [fetchItems.fulfilled.type]: (state, action: PayloadAction<IItem[]>) => {
            state.items = action.payload
        }
    }
})




const { addItems } = itemSlice.actions;
export default itemSlice.reducer