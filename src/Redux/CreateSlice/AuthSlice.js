import { createSlice } from "@reduxjs/toolkit";
import { MdAlternateEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";






export const AuthSlice = createSlice({
    name: "Auth",


    initialState: {
        Register: JSON.parse(localStorage.getItem("regData")) ? JSON.parse(localStorage.getItem("regData")) : {},
        Login: {},
        GetData:[],

    },

    reducers: {
        handleRegister: (state, action) => {
            state.Register = action.payload
            console.log(action.payload, 'REgpaylod');
            localStorage.setItem("regData", JSON.stringify(action.payload))

        },

        handleLogin: (state, action) => {
            state.Login = action.payload
            const registeredUser = JSON.parse(localStorage.getItem("regData"))
        },
    }


})

export const { handleRegister, handleLogin } = AuthSlice.actions;
export default AuthSlice.reducer;