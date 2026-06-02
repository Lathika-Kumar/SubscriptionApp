import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    watchlist: [],
    purchases: [],
    subscriptions: [],
  },
  reducers: {
    addToWatchlist: (state, action) => {
      const movie = action.payload;
      const exists = state.watchlist.find(m => m.id === movie.id);
      if (!exists) {
        state.watchlist.push(movie);
      }
    },
    removeFromWatchlist: (state, action) => {
      const movieId = action.payload;
      state.watchlist = state.watchlist.filter(m => m.id !== movieId);
    },
    addPurchase: (state, action) => {
      const purchase = action.payload;
      state.purchases.push({
        ...purchase,
        purchasedAt: new Date().toISOString(),
      });
    },
    addSubscription: (state, action) => {
      const subscription = action.payload;
      state.subscriptions.push({
        ...subscription,
        subscribedAt: new Date().toISOString(),
      });
    },
    removeSubscription: (state, action) => {
      const subscriptionId = action.payload;
      state.subscriptions = state.subscriptions.filter(
        s => s.id !== subscriptionId
      );
    },
  },
});

export const {
  addToWatchlist,
  removeFromWatchlist,
  addPurchase,
  addSubscription,
  removeSubscription,
} = userSlice.actions;
export default userSlice.reducer;
