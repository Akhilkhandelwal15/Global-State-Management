import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name :"user",
    initialState:{
        isLoggedIn: false,
        userInfo: null,
    },
    reducers:{
        login: (state, action)=>{
            console.log("login");
            state.isLoggedIn = true;
            state.userInfo = action.payload;
        },
        logout: (state, action)=>{
            state.isLoggedIn = false;
            state.userInfo = null;
        }
    }
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;