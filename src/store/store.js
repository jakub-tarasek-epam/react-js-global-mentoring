import { configureStore } from '@reduxjs/toolkit';
import EditMovieSlice from 'state/EditMovieSlice';
import DeleteMovieSlice from 'state/DeleteMovieSlice';
import MoviesSlice from 'state/MoviesSlice';
import SelectedMovieSlice from 'state/SelectedMovieSlice';
import AddMovieSlice from 'state/AddMovieSlice';

export default configureStore({
  reducer: {
    movies: MoviesSlice,
    selectedMovie: SelectedMovieSlice,
    editMovie: EditMovieSlice,
    addMovie: AddMovieSlice,
    deleteMovie: DeleteMovieSlice
  }
});