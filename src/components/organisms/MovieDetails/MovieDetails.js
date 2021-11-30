import React from "react";
import Title from "components/molecules/Title/Title";
import { Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { unselectMovie } from 'state/SelectedMovieSlice';

import {
  Wrapper,
  Raiting,
  MovieTitle,
  Stack,
  FlexWrapper,
  Genre,
  Info,
  Description,
  Close,
} from "./MovieDetails.style";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state) => state.selectedMovie.value);

  return (
    <Wrapper>
      <Col>
        <Stack direction="horizontal" gap={3}>
          <Title isHeader={true} />
          <Close className="ms-auto" onClick={() => dispatch(unselectMovie()) }/>
        </Stack>
        <Row>
          <Col sm={4}>
            <Image src={selectedMovie.poster_path} fluid />
          </Col>
          <Col sm={6}>
            <FlexWrapper>
              <MovieTitle>{selectedMovie.title}</MovieTitle>
              <Raiting>{selectedMovie.vote_average}</Raiting>
            </FlexWrapper>
            <Row>
              <Genre>{selectedMovie.genres.map(genre => <span key={genre}>{genre} </span>)}</Genre>
            </Row>
            <FlexWrapper>
              <Info>
                {selectedMovie.release_date}
              </Info>
              <Info>
                {selectedMovie.runtime || "00:00:00"} min
              </Info>
            </FlexWrapper>
            <Row>
              <Description>{selectedMovie.overview}</Description>
            </Row>
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
};

export default MovieDetails;
