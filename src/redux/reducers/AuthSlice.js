// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // User data
  isAuthenticated: false, // Authentication status
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      // Save user data in local storage
      localStorage.setItem('user', JSON.stringify(action.payload));
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    loginUser: (state, action) => {
      // Check user data from local storage
      const savedUser = JSON.parse(localStorage.getItem('user'));
      if (savedUser && savedUser.username === action.payload.username && savedUser.password === action.payload.password) {
        state.user = savedUser;
        state.isAuthenticated = true;
      }
    },
    logoutUser: (state) => {
      // Clear user data from local storage
      localStorage.removeItem('user');
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export default authSlice.reducer;
