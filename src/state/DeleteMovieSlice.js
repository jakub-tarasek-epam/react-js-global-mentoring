import { createSlice } from '@reduxjs/toolkit';

export const DeleteMovieSlice = createSlice({
  name: 'deleteMovie',
  initialState: {
  },
  reducers: {
    hideDeleteModal: (state) => {
      state.value = false;
    },
    showDeleteModal: (state, action) => {
      state.value = action.payload;
    },
  },
})

export const { hideDeleteModal, showDeleteModal } = DeleteMovieSlice.actions;

export default DeleteMovieSlice.reducer;