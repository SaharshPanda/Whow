import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name : "userReducer",
    initialState : {
        userDetail : {},
        userAuthorisation : {}
    },
    reducers : {
        setUserDetail : (state,action) => {
            state.userDetail = action.payload
        },
        setUserAuthorisation : (state,action) => {
            state.userAuthorisation = action.payload
        }
    }
})

export const {setUserDetail, setUserAuthorisation} = userReducer.actions;
export default userReducer.reducer;