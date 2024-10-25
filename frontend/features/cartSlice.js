import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define async thunks for cart operations
export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async (user_id) => {
  const response = await axios.get(`http://localhost:3001/api/cart/getfromcart/${user_id}/items`);

  if (typeof response.data === 'string' && response.data.includes('<!doctype html>')) {
    throw new Error('Received HTML instead of JSON data');
  }
  return response.data;
});

export const addCartItem = createAsyncThunk('cart/addtocart', async ({ cart_id, product_id, quantity }) => {
  const response = await axios.post('http://localhost:3001/api/cart/addtocart', { cart_id, product_id, quantity });
  return response.data.item;
});

export const updateCartItem = createAsyncThunk('cart/updateCartItem', async ({ id, quantity }) => {
  const response = await axios.put(`http://localhost:3001/api/cart/updatecart/${id}`, { quantity });
  return response.data.item;
});

export const deleteCartItem = createAsyncThunk('cart/deleteCartItem', async (id) => {
  await axios.delete(`http://localhost:3001/api/cart/delfromcart/${id}`);
  return id;
});

// Cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle fetchCartItems
    builder.addCase(fetchCartItems.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.items = action.payload;
    });
    builder.addCase(fetchCartItems.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });

    // Handle addCartItem
    builder.addCase(addCartItem.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });

    // Handle updateCartItem
    builder.addCase(updateCartItem.fulfilled, (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    });

    // Handle deleteCartItem
    builder.addCase(deleteCartItem.fulfilled, (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    });
  }
});

export default cartSlice.reducer;
