import { createSlice } from "@reduxjs/toolkit";

export const SelectedMovieSlice = createSlice({
  name: "selectedMovie",
  initialState: {},
  reducers: {
    unselectMovie: (state) => {
      state.value = false;
    },
    selectMovie: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { unselectMovie, selectMovie } = SelectedMovieSlice.actions;

export default SelectedMovieSlice.reducer;
