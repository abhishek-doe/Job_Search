import {createSlice} from '@reduxjs/toolkit'

export const jobSlice = createSlice({
    name: "job",
    initialState: {value: {}},
    reducers: {
        jobD: (state, action) => {
        state.value = action.payload
    },
    
}
})

export const {jobD} = jobSlice.actions;
export default jobSlice.reducer