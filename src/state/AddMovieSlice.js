import { createSlice } from "@reduxjs/toolkit";

export const AddMovieSlice = createSlice({
  name: "addMovie",
  initialState: {},
  reducers: {
    hideAddMovieModal: (state) => {
      state.value = false;
    },
    showAddMovieModal: (state) => {
      state.value = true;
    },
  },
});

export const { hideAddMovieModal, showAddMovieModal } = AddMovieSlice.actions;

export default AddMovieSlice.reducer;
