import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
    name: 'resume',
    initialState: {
        data: []
    },
    reducers:{
        addContact(state, action){
            const info = action.payload
            state.data.push({
                name: info.name
            })
        },
        removeFromResume(state, action){
            state.data = [];
        }
    }
})

export const resumeActions = resumeSlice.actions;

export default resumeSlice;