// src/features/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../../firebase/firebaseConfig";

export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ email, password }) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user;
  }
);

export const signUp = createAsyncThunk(
  "user/signUp",
  async ({ email, password }) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return response;
  }
);

export const googleSignIn = createAsyncThunk("user/googleSignIn", async () => {
  const response = await signInWithPopup(auth, provider);
  return response.user;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  },
  reducers: {
    logOut: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(googleSignIn.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
