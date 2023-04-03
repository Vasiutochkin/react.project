import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/movieSlice";
import {toggleReducer} from "./slices/toggleSlice";

const rootReducers = combineReducers({
    movies: movieReducer,
    toggleReducer: toggleReducer
});

const setupStore = () => configureStore({
    reducer: rootReducers
});
export {
    setupStore
}