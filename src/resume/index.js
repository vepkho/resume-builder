import { configureStore } from "@reduxjs/toolkit";
import resumeSlice from "./resume-slice";

import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import {combineReducers} from '@reduxjs/toolkit'

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const reducer = combineReducers({
    resume: resumeSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer
})

export default store;