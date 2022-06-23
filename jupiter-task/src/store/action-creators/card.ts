import {createAsyncThunk} from "@reduxjs/toolkit";
import CardService from "../../api/CardService";

interface FetchCardsParams {
    page: number;
    activeCategory: string;
    limit: number;
}

export const fetchCards = createAsyncThunk(
    'card/fetchAll',
    async ({page, activeCategory, limit}: FetchCardsParams, thunkAPI) => {
        try {
            const response = await CardService.fetchCards(limit, page, activeCategory)
            return {data: response.data, totalCount: response.headers["x-total-count"]}
        } catch (e) {
            return thunkAPI.rejectWithValue('Fetching Cards error')
        }
    }
)
export const loadMoreCards = createAsyncThunk(
    'moreCards/fetchAll',
    async ({page, activeCategory, limit}: FetchCardsParams, thunkAPI) => {
        try {
            const response = await CardService.fetchCards(limit, page, activeCategory)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Fetching Cards error')
        }
    }
)
export const deleteCard = createAsyncThunk(
    'deleteCard/fetchAll',
    async (id: number, thunkAPI) => {
        try {
            const response = await CardService.deleteCard(id)
            if(response.status === 200) {
                return id
            }
        } catch (e) {
            return thunkAPI.rejectWithValue('Fetching Cards error')
        }
    }
)