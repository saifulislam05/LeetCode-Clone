import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { firestore } from "../../firebase/firebaseConfig";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

const initialState = {
  problems: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

// Async thunk to initialize problems data
export const fetchProblems = createAsyncThunk(
  "problems/fetchProblems",
  async (_, { dispatch }) => {
    const querySnapshot = await getDocs(collection(firestore, "problems"));
    const problems = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setProblems(problems));
  }
);

// Listen for real-time updates
export const subscribeToProblems = () => {
  return (dispatch) => {
    const unsubscribe = onSnapshot(
      collection(firestore, "problems"),
      (querySnapshot) => {
        const problems = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(setProblems(problems));
      }
    );

    return unsubscribe; // Return the unsubscribe function for cleanup
  };
};

export const problemSlice = createSlice({
  name: "problems",
  initialState,
  reducers: {
    setProblems: (state, action) => {
      state.problems = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Handle async actions if needed
  },
});

// Expose actions for use in components
export const { setProblems } = problemSlice.actions;

export default problemSlice.reducer;
