import React from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import {Wrapper, Btn} from "./Search.styles";
import { useHistory } from "react-router-dom";
import { matchPath } from 'react-router';

const searchQueryFromPath = () => {
    const path = '/search/:searchQuery';
    const match = matchPath(document.location.pathname, { path });
    const searchQuery = match && match.params.searchQuery;
    return searchQuery;
}


const Search = () => {

    let history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/search/' + e.target.searchQuery.value);
    }

    return (
        <>
            <Wrapper md={{ span: 10, offset: 1 }}>
                <p>Find your movie</p>
                <Form onSubmit={(e) => handleSubmit(e)}>
                <InputGroup >
                    <FormControl 
                        placeholder="What do you want to watch?" 
                        defaultValue={searchQueryFromPath()}
                        name="searchQuery"
                    />
                    <Btn type="submit">Search</Btn>
                </InputGroup >
                </Form>
            </Wrapper>
        </>
    );
}

export default Search;