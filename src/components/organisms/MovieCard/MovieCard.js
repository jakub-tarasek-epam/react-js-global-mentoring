import React from "react";
import { Stack } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { showEditMovieModal } from 'state/EditMovieSlice';
import { showDeleteModal } from 'state/DeleteMovieSlice';
import { selectMovie } from 'state/SelectedMovieSlice';

import {
  Wrapper,
  CardTitle,
  CardSubtitle,
  CardYear,
  CardBody,
  CardImg,
  Dropdown,
  Dots,
  DropdownMenu,
} from "./MovieCard.styles";

const MovieCard = ({ movie }) => {

  const dispatch = useDispatch();

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
    <Wrapper>
      <CardImg variant="top" src={movie.poster_path} onClick={() => dispatch(selectMovie(movie)) }/>
      <Dropdown className="forHover">
        <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>

        <DropdownMenu>
          <Dropdown.Item onClick={() => dispatch(showEditMovieModal(movie))}>Edit</Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(showDeleteModal(movie))}>Delete</Dropdown.Item>
        </DropdownMenu>
      </Dropdown>
      <CardBody>
        <Stack direction="horizontal" gap={2} className="align-items-start">
          <div>
            <CardTitle>{movie.title}</CardTitle>
            <CardSubtitle className="text-muted">{movie.genres.slice(0,2).join(" ")}</CardSubtitle>
          </div>
          <CardYear className="align-items-center text-center ms-auto">
            {movie.release_date}
          </CardYear>
        </Stack>
      </CardBody>
    </Wrapper>
  );
};

export default MovieCard;
