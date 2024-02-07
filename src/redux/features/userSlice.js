import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, provider, firestore } from "../../firebase/firebaseConfig";

// Utility functions for localStorage
const saveUserToLocalstorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const removeUserFromLocalstorage = () => {
  localStorage.removeItem("user");
};

// Initialize state from localStorage
const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: userFromLocalStorage || null,
  userData: null,
  isLoading: false,
  isError: false,
  errorMessage: "",
};

// Async thunks
export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ email, password }, { dispatch }) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    saveUserToLocalstorage(response.user);
    subscribeToUserData(response.user.uid, dispatch);
    return response.user;
  }
);

export const signUp = createAsyncThunk(
  "user/signUp",
  async ({ email, password }, { dispatch }) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    saveUserToLocalstorage(response.user);
    subscribeToUserData(response.user.uid, dispatch);
    return response.user;
  }
);

export const googleSignIn = createAsyncThunk(
  "user/googleSignIn",
  async (_, { dispatch }) => {
    const response = await signInWithPopup(auth, provider);
    saveUserToLocalstorage(response.user);
    subscribeToUserData(response.user.uid, dispatch);
    return response.user;
  }
);

export const logOut = createAsyncThunk("user/logOut", async () => {
  await signOut(auth);
  removeUserFromLocalstorage();
});

// Firestore subscription
const subscribeToUserData = (userId, dispatch) => {
  const docRef = doc(firestore, "users", userId);
  return onSnapshot(docRef, (doc) => {
    if (doc.exists()) {
      dispatch(setUserData(doc.data()));
    } else {
      console.log("No such document!");
    }
  });
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(googleSignIn.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(googleSignIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(googleSignIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.userData = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      });
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
