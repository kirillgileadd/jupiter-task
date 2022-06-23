import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICategory} from "../../models/ICategory";
import {fetchCategory} from "../action-creators/cartgory";

export interface CategorySate {
    categories: ICategory[];
    loading: boolean;
    error: string;
    activeCategory: string;
}

const initialState: CategorySate = {
    categories: [],
    loading: false,
    error: '',
    activeCategory: '2'
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setActiveCategory: (state, action: PayloadAction<string>) => {
            state.activeCategory = action.payload
        }
    },
    extraReducers: {
        [fetchCategory.pending.type]: (state) => {
            state.loading = true
        },
        [fetchCategory.fulfilled.type]: (state, action: PayloadAction<ICategory[]>) => {
            state.loading = false
            state.categories = action.payload
            state.error = ''
        },
        [fetchCategory.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    }
})
export const {setActiveCategory} = categorySlice.actions

export default categorySlice.reducer