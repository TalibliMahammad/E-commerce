import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../CreateSlice/Counterslice";

 const store = configureStore({
    reducer:{
        allState:counterSlice,
    }
 })

