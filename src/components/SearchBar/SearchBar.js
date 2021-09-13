import React, { useState, useEffect } from "react";
import MoviesList from "../MoviesList/MoviesList";

const moviesList = [
    {
        id: "1",
        name: "Bohemian Rhapsody"
    },
    {
        id: "2",
        name: "Kill Bill",
    },
    {
        id: "3",
        name: "Pulp Fiction"
    }
]

const SearchBar = () => {

    const [movies, setMovies] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setMovies(moviesList);
            setIsLoading(false);
        }, 2000);
    }, []);

    const filterMovies = (e) => {
        if(isLoading){
            return;
        }
        const searchTerm = e.target.value.toLowerCase();
        const filteredMovies = movies.filter(({name}) => name.toLowerCase().includes(searchTerm));
        setFiltered(filteredMovies);
    }

    return (
        <div>
            <h3>Function component</h3>
            <label htmlFor="searchMovie">Search: </label>
            <input type="text" id="searchMovie" onChange={filterMovies}/>
            {isLoading ? <div>Loading...</div> : <MoviesList movies={filtered.length > 0 ? filtered : movies} />}
        </div>
    )
}

export default SearchBar;