import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import { auth, provider, firestore } from "../../firebase/firebaseConfig";

console.log('====================================');
console.log("userSlice");
console.log('====================================');
// Utility functions for localStorage
const saveUserToLocalstorage = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
};

const removeUserFromLocalstorage = () => {
  localStorage.removeItem("user");
};

// Initialize state from localStorage
const userDataFromLocalStorage = JSON.parse(localStorage.getItem('user') || '{}');


const initialState = {
  userData: userDataFromLocalStorage || null,
  isLoading: false,
  isError: false,
  errorMessage: "",
};


// Async thunk for initializing user data
export const initializeUser = createAsyncThunk('user/initializeUser', async (_, { dispatch }) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const unsubscribe = subscribeToUserData(user.uid, dispatch);
      return () => unsubscribe(); // Cleanup subscription on unmount or logout
    } else {
      dispatch(clearUserData()); // Clear user data if not logged in
    }
  });
});

// Firestore subscription
const subscribeToUserData = (userId, dispatch) => {
  const docRef = doc(firestore, 'users', userId);
  return onSnapshot(docRef, (doc) => {
    if (doc.exists()) {
      const userData = doc.data();
      dispatch(setUserData(userData));
      saveUserToLocalstorage(userData);
    } else {
      console.log('No such document!');
    }
  });
};



export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ email, password }, { dispatch }) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      subscribeToUserData(response.user.uid, dispatch);
      return response.user.uid;
    } catch (error) {
      console.error("Error in user sign-in or Firestore operation:", error);
      throw error;
    }
  }
);

export const signUp = createAsyncThunk(
  "user/signUp",
  async ({ email, password, name }, { dispatch }) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const userData = {
      uid: response.user.uid,
      email: response.user.email,
      displayName: name || response.user.displayName,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      likedProblems: [],
      dislikedProblems: [],
      solvedProblems: [],
      starredProblems: [],
    };
    await setDoc(doc(firestore, "users", response.user.uid), userData);
    subscribeToUserData(response.user.uid, dispatch);
    return response.user.uid;
  }
);

export const googleSignIn = createAsyncThunk(
  "user/googleSignIn",
  async (_, { dispatch }) => {
    const response = await signInWithPopup(auth, provider);
    const userRef = doc(firestore, "users", response.user.uid);
    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      const userData = {
        uid: response.user.uid,
        email: response.user.email,
        displayName: response.user.displayName,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        likedProblems: [],
        dislikedProblems: [],
        solvedProblems: [],
        starredProblems: [],
      };
      await setDoc(userRef, userData);
    }
    subscribeToUserData(response.user.uid, dispatch);
    return response.user.uid;
  }
);

export const logOut = createAsyncThunk("user/logOut", async () => {
  await signOut(auth);
  removeUserFromLocalstorage();
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    clearUserData: (state) => {
      state.userData = null;
      removeUserFromLocalstorage();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(signIn.fulfilled, (state) => {
        state.isLoading = false;
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
      .addCase(signUp.fulfilled, (state) => {
        state.isLoading = false;
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
      .addCase(googleSignIn.fulfilled, (state) => {
        state.isLoading = false;
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
        state.userData = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message;
      });
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;
