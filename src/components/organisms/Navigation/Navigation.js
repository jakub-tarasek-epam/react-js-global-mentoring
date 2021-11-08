import React from 'react';
import { useDispatch } from 'react-redux';
import { filterMovies, sortMovies } from 'state/MoviesSlice';
import { Wrapper, Stack, ToggleButton, ToggleButtonGroup } from "./Navigation.styles";

function Navigation() {
    const dispatch = useDispatch();

    const handleGanreChange = (val) => dispatch(filterMovies(val));
    const handleSortChange = (event) => dispatch(sortMovies(event.target.value));

    return (
        <Wrapper>
            <Stack direction="horizontal" gap={3}>
                <ToggleButtonGroup type="radio" name="options" defaultValue="All" onChange={handleGanreChange}>
                    <ToggleButton id="genreToggle-1" value="All" href="link">
                        ALL
                    </ToggleButton>
                    <ToggleButton id="genreToggle-2" value="Documentary">
                        DOCUMNETARY
                    </ToggleButton>
                    <ToggleButton id="genreToggle-3" value="Comedy">
                        COMEDY
                    </ToggleButton>
                    <ToggleButton id="genreToggle-4" value="Horror">
                        HORROR
                    </ToggleButton>
                    <ToggleButton id="genreToggle-5" value="Crime">
                        CRIME
                    </ToggleButton>
                </ToggleButtonGroup>
                <div className="ms-auto">SORT BY</div>
                <select onChange={handleSortChange}>
                    <option value="release_date">RELEASE DATE</option>
                    <option value="vote_average">RAITNG</option>
                </select>
            </Stack>
            <span><strong>39</strong> movies found</span>
        </Wrapper>
    )
}

export default Navigation;
