import { createSlice } from '@reduxjs/toolkit'

export const jobSlice = createSlice({
    name: "job",
    initialState: { value: {}, filters: {} },
    reducers: {
        jobD: (state, action) => {
            state.value = action.payload
        },
        filteredData: (state, action) => {
            state.filters = action.payload
        }
    }
})

export const { jobD, filteredData } = jobSlice.actions;
export default jobSlice.reducer