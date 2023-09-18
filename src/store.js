// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/reducers/AuthSlice"; // Import the authSlice reducer
import wishlistReducer from "./redux/reducers/WishlistSlicer";

const store = configureStore({
  reducer: {
    auth: authReducer, // Include the authSlice reducer
    wishlist: wishlistReducer,
    // ... other reducers if you have more
  },
});

export default store;
