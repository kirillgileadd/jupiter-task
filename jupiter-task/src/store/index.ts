import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cardReducer from "./slices/cardSlice"
import categoryReducer from "./slices/categorySlice"

const rootReducer = combineReducers({
    cards: cardReducer,
    categories: categoryReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]