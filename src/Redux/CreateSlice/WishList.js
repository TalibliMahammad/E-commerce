import { createSlice } from "@reduxjs/toolkit";







export const WishList = createSlice({
    name: "WishList",


    initialState: {
        ClickedHearts: false,
        WishListData: JSON.parse(localStorage.getItem("WishListData")) ? JSON.parse(localStorage.getItem("WishListData"))  : [],
        itemId: null, 

    },

    reducers: {
        heartsFunc: (state, action) => {
            const { id, images, title, price, rating} = action.payload;
            const existingItem = state.WishListData.find((item) => item.id === id);

            if (existingItem) {
                state.WishListData = state.WishListData.filter((item) => item.id !== id);
                state.ClickedHearts = false;
                state.itemId = null;
                localStorage.setItem("WishListData", JSON.stringify(state.WishListData));
                
            } else {
                state.WishListData.push({ id, images, title, price, rating });
                state.ClickedHearts = true;
                state.itemId = id;
                localStorage.setItem("WishListData", JSON.stringify(state.WishListData));
            }
            

        },


    }


})

export const { heartsFunc } = WishList.actions;
export default WishList.reducer;