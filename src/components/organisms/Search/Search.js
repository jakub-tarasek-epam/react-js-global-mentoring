import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import {Wrapper, Btn} from "./Search.styles";

const Search = () => {
    return (
        <>
            <Wrapper md={{ span: 10, offset: 1 }}>
                <p>Find your movie</p>
                <InputGroup >
                    <FormControl placeholder="What do you want to watch?" />
                    <Btn>Search</Btn>
                </InputGroup >
            </Wrapper>
        </>
    );
}

export default Search;