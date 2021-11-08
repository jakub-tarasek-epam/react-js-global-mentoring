import { createSlice } from "@reduxjs/toolkit";

export const EditMovieSlice = createSlice({
  name: "editMovie",
  initialState: {},
  reducers: {
    hideEditMovieModal: (state) => {
      state.value = false;
    },
    showEditMovieModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { hideEditMovieModal, showEditMovieModal } =
  EditMovieSlice.actions;

export default EditMovieSlice.reducer;
