import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  currentUser: localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null,
  status: "idle",
  error: null,
};

const baseUrl = "http://localhost:8000/api/user";

export const handleRegister = createAsyncThunk(
  "auth/handleRegister",
  async (postData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/register`, postData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const handleLogin = createAsyncThunk(
  "auth/handleLogin",
  async (postData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseUrl}/login`, postData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCred: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
    removeCred: (state) => {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(handleLogin.fulfilled, (state, action) => {
        state.status = "idle";
        
      })
      .addCase(handleLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      })
      .addCase(handleRegister.pending, (state) => {
        state.status = "loading";
      })
      .addCase(handleRegister.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(handleRegister.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      });
  },
});

export const { setCred, removeCred } = authSlice.actions;

export const getCurrentUser = (state) => state.auth.currentUser;
export const getAuthStatus = (state) => state.auth.status;
export const getAuthError = (state) => state.auth.error;

export default authSlice.reducer;
