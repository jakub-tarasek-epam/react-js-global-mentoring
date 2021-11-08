import React from "react";
import { Col } from "react-bootstrap";
import MovieCard from "components/organisms/MovieCard/MovieCard";
import Navigation from "components/organisms//Navigation/Navigation";
import { RowMain, Wrapper } from "./MovieList.styles";
import { useSelector } from 'react-redux';

const MovieList = () => {

  const movies = useSelector((state) => {
    if(state.movies)
      return state.movies.movies
  });

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
