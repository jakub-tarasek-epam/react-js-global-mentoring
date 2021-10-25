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
  const { editableMovie, setShowMovieModal } = useContext(AppContext);

  return (
    <Wrapper>
      <Col>
        <Stack direction="horizontal" gap={3}>
          <Title isHeader={true} />
          <Close className="ms-auto" onClick={() => setShowMovieModal(false)}/>
        </Stack>
        <Row>
          <Col sm={4}>
            <Image src={editableMovie.image} fluid />
          </Col>
          <Col sm={6}>
            <FlexWrapper>
              <MovieTitle>{editableMovie.title}</MovieTitle>
              <Raiting>{editableMovie.rating}</Raiting>
            </FlexWrapper>
            <Row>
              <Genre>{editableMovie.genre}</Genre>
            </Row>
            <FlexWrapper>
              <Info>
                {editableMovie.year}
              </Info>
              <Info>
                {editableMovie.duration}
              </Info>
            </FlexWrapper>
            <Row>
              <Description>{editableMovie.desc}</Description>
            </Row>
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
};

export default MovieDetails;
