import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


// Thunk istifadə etmədən:
export const fetchProducts = () => async (dispatch) => {
    dispatch(fetchDataStart());


    try {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json();
        dispatch(fetchDataSuccess(data.products));
    } catch (error) {
        dispatch(fetchDataFailure(error.message));
    }
};


export const fetchDataSlice = createSlice({
    name: 'fetchData',

    initialState: {
        data: [],
        loading: false,
        error: null,
        filtered: [],
    },

    reducers: {
        fetchDataStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
        },
        fetchDataFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        filterData(state, action) {
            const filtered = state.data.filter((item) =>
                item.title.toLowerCase().includes(action.payload.toLowerCase())
            );
            state.filtered = filtered;
        },
        

    },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure, filterData } = fetchDataSlice.actions;

export default fetchDataSlice.reducer;