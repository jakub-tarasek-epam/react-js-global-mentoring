import React from "react";
import { useDispatch } from "react-redux";
import { Btn } from "./AddItemButton.style";
import { showAddMovieModal } from 'state/AddMovieSlice';

const AddItemButton = () => {
  const dispatch = useDispatch();
  
  return <Btn $isOutline className="ms-auto" onClick={() => dispatch(showAddMovieModal()) }>Add movie</Btn>;
};

export default AddItemButton;
