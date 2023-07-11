import {createSlice} from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: "auth",
    initialState: {value: {}},
    reducers: (state, action) => {
        state.value = action.payload
    }
})
export const {login} = authSlice.actions
export default authSlice.reducer