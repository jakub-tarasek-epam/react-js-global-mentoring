import React, { useContext } from "react";
import Title from "components/molecules/Title/Title";
import { Col, Image, Row } from "react-bootstrap";
import { AppContext } from "context/context";


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
  const { selectedMovie, setSelectedMovie } = useContext(AppContext);

  return (
    <Wrapper>
      <Col>
        <Stack direction="horizontal" gap={3}>
          <Title isHeader={true} />
          <Close className="ms-auto" onClick={() => setSelectedMovie(false)}/>
        </Stack>
        <Row>
          <Col sm={4}>
            <Image src={selectedMovie.image} fluid />
          </Col>
          <Col sm={6}>
            <FlexWrapper>
              <MovieTitle>{selectedMovie.title}</MovieTitle>
              <Raiting>{selectedMovie.rating}</Raiting>
            </FlexWrapper>
            <Row>
              <Genre>{selectedMovie.genre}</Genre>
            </Row>
            <FlexWrapper>
              <Info>
                {selectedMovie.year}
              </Info>
              <Info>
                {selectedMovie.duration}
              </Info>
            </FlexWrapper>
            <Row>
              <Description>{selectedMovie.desc}</Description>
            </Row>
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
};

export default MovieDetails;
