import { AUTH_COOKIE_KEY } from "@/lib/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  user: {
    username: string;
    email: string;
  } | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  loading: true,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{ username: string; email: string }>
    ) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
      // Set cookie with 24 hours expiration
      Cookies.set(AUTH_COOKIE_KEY, "mockToken", { expires: 1, path: "/" });
    },
    loginFailure: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
      // Remove cookie
      Cookies.remove(AUTH_COOKIE_KEY, { path: "/" });
    },
    initializeAuth: (state) => {
      const token = Cookies.get(AUTH_COOKIE_KEY);
      if (token === "mockToken") {
        state.isAuthenticated = true;
        state.user = {
          username: "Admin User",
          email: "admin@restart.com",
        };
      }
      state.loading = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  initializeAuth,
} = authSlice.actions;
export default authSlice.reducer;
