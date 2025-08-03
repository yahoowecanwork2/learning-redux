import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementbyamount: (state, action) => {
            state.value += action.paylaod
        }
    }
})
export const { increment, decrement, incrementbyamount } =
    counterSlice.actions

export default counterSlice.reducer