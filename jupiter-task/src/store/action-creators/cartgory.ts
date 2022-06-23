import {createAsyncThunk} from "@reduxjs/toolkit";
import CategoryService from "../../api/CategoryService";

export const fetchCategory = createAsyncThunk(
    'category/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await CategoryService.fetchCategories()
            console.log(response);
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Fetching Categories error')
        }
    }
)