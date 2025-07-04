import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async ()=>{
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        return data;
    }
);

const productSlice = createSlice({
    name: "product",
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchProducts.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.loading = false;
            state.items = action.payload
        })
        .addCase(fetchProducts.rejected, (state)=>{
            state.loading = false;
            state.error = "Failed to fetch data";
        });
    }
});

export default productSlice.reducer;