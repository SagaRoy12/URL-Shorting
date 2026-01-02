import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    isAuthenticated: false,
    loading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.currentUser = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
        },
        logout: (state) => {
            state.currentUser = null;
            state.isAuthenticated = false;
            state.loading = false;
        }
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
