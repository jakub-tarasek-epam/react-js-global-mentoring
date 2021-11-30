import React from 'react';
import { render } from '@testing-library/react';
import expect from 'expect';
import AddMovieButton from './AddItemButton';
import { showAddMovieModal } from 'state/AddMovieSlice';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}));


describe('Add movie button', () => {

  it('should dispatch even', () => {
    const { getByRole } = render(<AddMovieButton />);
    getByRole('button').click();
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(showAddMovieModal());
  });

  it('should have label', () => {
    const { queryByText } = render(<AddMovieButton />);
    expect(queryByText('Add movie')).toBeTruthy();
  });

})
