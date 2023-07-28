import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
        userSuccess: (state,action)=>{
            state.user = action.payload;
        },
         userFailure: (state)=>{
            state.user = null;
         },
    }
})

export const {userSuccess,userFailure} = userSlice.actions;
const selectUser = (state)=>state.user.user;
export default userSlice.reducer;