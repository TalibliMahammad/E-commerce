import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 1. Async thunk yaradın
export const handleLogin = createAsyncThunk(
  "Auth/handleLogin",
  async ({ email, password }, thunkAPI) => {
    const regData = JSON.parse(localStorage.getItem("regData"));

    if (regData && regData.email === email && regData.password === password) {
      return regData; // uğurlu login
    } else {
      return thunkAPI.rejectWithValue("Invalid credentials");
    }
  }
);

// 2. Slice yaradın
export const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    Register: JSON.parse(localStorage.getItem("regData")) || {},
    Login: {},
    GetData: [],
  },
  reducers: {
    handleRegister: (state, action) => {
      const { email, password } = action.payload;
      if (!email || !password) return;
      state.Register = action.payload;
      localStorage.setItem("regData", JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleLogin.fulfilled, (state, action) => {
        state.Login = action.payload;
      })
      .addCase(handleLogin.rejected, (state, action) => {
        // rejected zamanı error message qayıdır
        console.error("Login failed:", action.payload);
      });
  },
});

export const { handleRegister } = AuthSlice.actions;
export default AuthSlice.reducer;
