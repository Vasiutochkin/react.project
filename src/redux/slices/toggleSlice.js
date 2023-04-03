import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    toggle: true,
}

const toggleSlice = createSlice({
    name: 'toggleSlice',
    initialState,
    reducers:
        {
            getToggle: (state, action) => {
                state.toggle = action.payload
            }
        }
});

const {reducer: toggleReducer, actions: {getToggle}} = toggleSlice;

const toggleActions = {getToggle}

export {
    toggleActions,
    toggleReducer
}


