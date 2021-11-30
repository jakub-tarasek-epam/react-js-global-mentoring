import React from 'react';
import routeData from 'react-router';
import renderer from 'react-test-renderer';

import MovieList from './MovieList';
import { useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => jest.fn(),
}));


describe('Movie list', () => {

    it('renders correctly movie list component', () => {
        jest.spyOn(routeData, 'useParams').mockReturnValue({ searchQuery: 'test' })
        useSelector.mockImplementation((selectorFn) => selectorFn({
            movies: {
                movies: [{
                    id: 1,
                    release_date: '1991-26-05',
                    title: 'title',
                    tagline: 'tagline'
                }]
            }
        }));
        const tree = renderer.create(<MovieList />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
