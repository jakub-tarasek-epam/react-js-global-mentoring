import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getData, { createMovieAPI, deleteMovieAPI, updateMovieAPI } from "api/api";

export const fetchMovies = createAsyncThunk("movies/fetch", async (searchQuery) => {
  return await getData(searchQuery);
});

export const filterMovies = createAsyncThunk(
  "movies/filter",
  async (filter, { getState }) => {
    return await getData('', filter, getState().movies.sort);
  }
);

export const sortMovies = createAsyncThunk(
  "movies/sort",
  async (sort, { getState }) => {
    return await getData('', getState().movies.filter, sort);
  }
);

export const createMovie = createAsyncThunk(
  "movies/create",
  async (movie, { getState }) => {
    await createMovieAPI(movie);
    return await getData(getState().movies.filter, getState().movies.sort);
  }
);

export const updateMovie = createAsyncThunk(
  "movies/update",
  async (movie, { getState }) => {
    await updateMovieAPI(movie);
    return await getData(getState().movies.filter, getState().movies.sort);
  }
);

export const deleteMovie = createAsyncThunk(
  "movies/delete",
  async (movie, { getState }) => {
    await deleteMovieAPI(movie);
    return await getData(getState().movies.filter, getState().movies.sort);
  }
);

export const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    filter: "All",
    sort: "release_date",
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload.data;
      state.filter = action.payload.filter;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload.data;
        state.filter = action.payload.filter;
        state.sort = action.payload.sort;
      })
      .addCase(filterMovies.fulfilled, (state, action) => {
        state.movies = action.payload.data;
        state.filter = action.payload.filter;
        state.sort = action.payload.sort;
      })
      .addCase(sortMovies.fulfilled, (state, action) => {
        state.movies = action.payload.data;
        state.filter = action.payload.filter;
        state.sort = action.payload.sort;
      })
      .addCase(createMovie.fulfilled, (state, action) => {
        state.movies = action.payload.data;
        state.filter = action.payload.filter;
        state.sort = action.payload.sort;
      })
      .addCase(updateMovie.fulfilled, (state, action) => {
        state.movies = action.payload.data;
        state.filter = action.payload.filter;
        state.sort = action.payload.sort;
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.movies = action.payload.data;
        state.filter = action.payload.filter;
        state.sort = action.payload.sort;
      });
  },
});

export default MoviesSlice.reducer;
