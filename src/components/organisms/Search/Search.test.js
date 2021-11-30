import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import expect from 'expect';
import Search from './Search';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe('Search section', () => {

    it('should handle submit', () => {
        const { getByRole } = render(<Search />);
        fireEvent.change(getByRole('textbox'), { target: { value: 'test' } })
        getByRole('button').click();

        expect(mockHistoryPush).toBeCalledTimes(1);
        expect(mockHistoryPush).toBeCalledWith('/search/test');
    });

    it('should have button', () => {
        const { getByRole } = render(<Search />);
        expect(getByRole('button')).toBeTruthy();
    });

    it('should have text', () => {
        const { getByRole } = render(<Search />);
        expect(getByRole('button').textContent).toMatch('Search');
    });

    it('should have value from path', () => {
        window.history.pushState({}, 'Page Title', '/search/test');

        const { getByRole } = render(<Search />);
        expect(getByRole('textbox').value).toMatch('test');
    });
})
