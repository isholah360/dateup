import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import postsReducer from './postSlice'

const store = configureStore({
    reducer: {
        auth: authReducer, 
        posts: postsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true, 
})

export default store