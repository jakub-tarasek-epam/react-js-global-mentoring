import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import MovieCard from "components/organisms/MovieCard/MovieCard";
import Navigation from "components/organisms//Navigation/Navigation";
import { AppContext } from "context/context";

import { RowMain, Wrapper, Nothing } from "./MovieList.styles";

const MovieList = () => {
  const { filteredMovies } = useContext(AppContext);

  return (
    <Wrapper>
      <Navigation />
      <RowMain xs={1} md={3} lg={3} className="g-4">
        {!filteredMovies.length && <Nothing>Nothing match</Nothing>}
        {filteredMovies.map((movie) => (
          <Col key={movie.id}>
            <MovieCard {...movie} />
          </Col>
        ))}
      </RowMain>
    </Wrapper>
  );
};

export default MovieList;
