import React, { useContext } from "react";
import { Card, Stack } from "react-bootstrap";
import PropTypes from "prop-types";
import { AppContext } from "context/context";

import {
  Wrapper,
  CardTitle,
  CardSubtitle,
  CardYear,
  CardBody,
  Dropdown,
  Dots,
  DropdownMenu,
} from "./MovieCard.styles";

const MovieCard = (props) => {
  const {
    setEditableMovie,
    setShowDeleteModal,
    setShowMovieModal,
    setSelectedMovie,
  } = useContext(AppContext);

  const handleItem = (movieModal) => {
    setEditableMovie(props);
    if (movieModal) {
      setShowMovieModal(true);
    } else setShowDeleteModal(true);
  };

  const CustomToggle = React.forwardRef(({ onClick }, ref) => (
    <Dots
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Dots>
  ));

  return (
    <Wrapper onClick={() => setSelectedMovie(props.movie)}>
      <Card.Img variant="top" src={props.image} />
      <Dropdown className="forHover">
        <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>

        <DropdownMenu>
          <Dropdown.Item onClick={() => handleItem(true)}>Edit</Dropdown.Item>
          <Dropdown.Item onClick={() => handleItem()}>Delete</Dropdown.Item>
        </DropdownMenu>
      </Dropdown>
      <CardBody>
        <Stack direction="horizontal" gap={2} className="align-items-start">
          <div>
            <CardTitle>{props.title}</CardTitle>
            <CardSubtitle className="text-muted">{props.genre}</CardSubtitle>
          </div>
          <CardYear className="align-items-center text-center ms-auto">
            {props.year}
          </CardYear>
        </Stack>
      </CardBody>
    </Wrapper>
  );
};

MovieCard.protoTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.string,
};

export default MovieCard;
