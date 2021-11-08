import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getData from "api/api";

export const fetchMovies = createAsyncThunk("movies/fetch", async () => {
  return await getData();
});

export const filterMovies = createAsyncThunk(
  "movies/filter",
  async (filter, { getState }) => {
    return await getData(filter, getState().movies.sort);
  }
);

export const sortMovies = createAsyncThunk(
  "movies/sort",
  async (sort, { getState }) => {
    return await getData(getState().movies.filter, sort);
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
      });
  },
});

export default MoviesSlice.reducer;
