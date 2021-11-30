import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import MovieCard from "components/organisms/MovieCard/MovieCard";
import Navigation from "components/organisms/Navigation/Navigation";
import { RowMain, Wrapper } from "./MovieList.styles";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router";
import { fetchMovies } from "state/MoviesSlice";

const MovieList = () => {

  let { searchQuery } = useParams();
  const dispatch = useDispatch();

  const movies = useSelector((state) => {
    if(state.movies)
      return state.movies.movies
  });

  useEffect(() => {
    dispatch(fetchMovies(searchQuery));
  }, [searchQuery]);

  return (
    <Wrapper>
      <Navigation />
      <RowMain xs={1} md={3} lg={3} className="g-4">
        {movies && movies.map((movie) => (
          <Col key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </RowMain>
    </Wrapper>
  );
};

export default MovieList;
