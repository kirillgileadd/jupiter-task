import {ICard} from "../../models/ICard";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCards} from "../action-creators/card";

export interface CardSate {
    cards: ICard[];
    loading: boolean;
    error: string;
    page: number;
    totalPages: string | null;
}

const initialState: CardSate = {
    cards: [],
    loading: false,
    error: '',
    page: 1,
    totalPages: null
}

interface FetchCardsFulfilledAction {
    data: ICard[];
    totalCount: string
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setPage: (state) => {
            state.page += 1
        },
        setTotalPages: (state, action: PayloadAction<string>) => {
            state.totalPages = action.payload
        }
    },
    extraReducers: {
        [fetchCards.pending.type]: (state) => {
            state.loading = true
        },
        [fetchCards.fulfilled.type]: (state, action: PayloadAction<FetchCardsFulfilledAction>) => {
            const {data, totalCount} = action.payload
            state.loading = false
            state.cards = data
            state.error = ''
            state.totalPages = String(Math.ceil(Number(totalCount) / 10))
        },
        [fetchCards.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
    }
})

export const {  setPage, setTotalPages } = cardSlice.actions

export default cardSlice.reducer