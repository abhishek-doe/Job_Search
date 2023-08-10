import {createSlice} from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: "auth",
    initialState: {value: {}, isAuth: false},
    reducers: {
        login:  (state, action) => {
            state.value = action.payload
            state.isAuth = true
        },
        logout: (state, action) => {
            state.value = {},
            state.isAuth = false
        }
    }
})
export const {login, logout} = authSlice.actions
export default authSlice.reducer