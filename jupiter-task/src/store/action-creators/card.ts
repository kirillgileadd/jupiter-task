import {createAsyncThunk} from "@reduxjs/toolkit";
import CardService from "../../api/CardService";

interface FetchCardsParams {
    page: number
    activeCategory: string
}

export const fetchCards = createAsyncThunk(
    'card/fetchAll',
    async ({page, activeCategory}: FetchCardsParams, thunkAPI) => {
        try {
            const response = await CardService.fetchCards(9, page, activeCategory)
            console.log(response);
            return {data: response.data, totalCount: response.headers["x-total-count"]}
        } catch (e) {
            return thunkAPI.rejectWithValue('Fetching Cards error')
        }
    }
)