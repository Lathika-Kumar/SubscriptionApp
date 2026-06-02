import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  quantity: 0,
  orders: [],
};

const recalc = (state) => {
  state.total = state.items.reduce((s, it) => s + it.price * it.quantity, 0);
  state.quantity = state.items.reduce((s, it) => s + it.quantity, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const payload = action.payload;
      const existing = state.items.find((i) => i.id === payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...payload, quantity: 1 });
      }
      recalc(state);
    },
    decrementProduct: (state, action) => {
      const id = action.payload;
      const existing = state.items.find((i) => i.id === id);
      if (existing) {
        existing.quantity -= 1;
        if (existing.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== id);
        }
      }
      recalc(state);
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((i) => i.id !== id);
      recalc(state);
    },
    clearCart: (state) => {
      state.items = [];
      recalc(state);
    },
    placeOrder: (state) => {
      if (state.items.length === 0) return;
      state.orders.push({
        id: `order_${Date.now()}`,
        createdAt: new Date().toISOString(),
        items: state.items,
        total: state.total,
      });
      state.items = [];
      recalc(state);
    },
  },
});

export const { addProduct, decrementProduct, removeProduct, clearCart, placeOrder } = cartSlice.actions;

export default cartSlice.reducer;
