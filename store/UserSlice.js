import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
        name: "Manish"
    }
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.data = action.payload
        },
        removeUse: (state) => {
            state.data = {};
        }

    },
})

// Action creators are generated for each case reducer function
export const { setUser, getUser } = UserSlice.actions

export default UserSlice.reducer