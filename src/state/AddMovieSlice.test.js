import AddMovieSlice, { hideAddMovieModal, showAddMovieModal } from './AddMovieSlice';
import expect from 'expect';

describe('Add movie reducer', () => {
  it('should return the initial state', () => {
    expect(AddMovieSlice(undefined, {})).toEqual({});
  });

  it('should handle hideAddMovieModal', () => {
    const action = {
      type: hideAddMovieModal,
    };
    expect(AddMovieSlice({}, action)).toEqual({ value: false });
  });

  it('should handle showAddMovieModal', () => {
    const action = {
      type: showAddMovieModal,
    };
    expect(AddMovieSlice({}, action)).toEqual({ value: true });
  });

});
