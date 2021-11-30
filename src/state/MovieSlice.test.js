import MoviesSlice, { fetchMovies } from './MoviesSlice';
import expect from 'expect';

import getData, { createMovieAPI, deleteMovieAPI, updateMovieAPI } from 'api/api';

jest.mock('api/api');

describe('Movie reducer', () => {
  it('should return the initial state', () => {
    expect(MoviesSlice(undefined, {})).toEqual({
      filter: 'All',
      movies: [],
      sort: 'release_date',
    });
  });

  it('should handle fetchMovies fulfilled', () => {
    const action = {
      type: fetchMovies.fulfilled,
      payload: {
        data: [],
        filter: 'filter',
        sort: 'sort'
      }
    };

    expect(MoviesSlice({}, action)).toEqual({
      filter: 'filter',
      movies: [],
      sort: 'sort',
    });
  });

  it('should handle fetchMovies', async () => {
    const dispatch = jest.fn();
    await fetchMovies("test")(dispatch);
    expect(getData).toBeCalledWith("test")
  });
});
