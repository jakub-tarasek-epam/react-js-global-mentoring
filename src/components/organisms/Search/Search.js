import React, { useContext, useEffect, useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import {AppContext} from 'context/context';
import {Wrapper, Btn} from "./Search.styles";

const Search = () => {

    const [inputValue, setInputValue] = useState('');
    const inputValueHandler = e => {
        setInputValue(e.target.value.toLowerCase());
    };
    const { setFilteredMovies, movies } = useContext(AppContext)

    useEffect(() => {
        const filterItems = movies.filter(movie => movie.title.toLowerCase().includes(inputValue));
        setFilteredMovies(filterItems);
    }, [inputValue]);

    return (
        <>
            <Wrapper md={{ span: 10, offset: 1 }}>
                <p>Find your movie</p>
                <InputGroup >
                    <FormControl onChange={inputValueHandler} placeholder="What do you want to watch?" />
                    <Btn>Search</Btn>
                </InputGroup >
            </Wrapper>
        </>
    );
}

export default Search;