import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../CreateSlice/Counterslice";
import  AuthSlice  from "../CreateSlice/AuthSlice";
import  fetchDataSlice  from "../CreateSlice/FetchDataSlice";


 export const store = configureStore({
    reducer:{
        /* allState:counterSlice, */
        regState:AuthSlice,
        fetchState:fetchDataSlice
   

    }
 })

