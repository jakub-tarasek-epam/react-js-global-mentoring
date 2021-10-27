import React, { useContext } from "react";
import { Btn } from "./AddItemButton.style";
import { AppContext } from "context/context";

const AddItemButton = () => {

  const { setShowMovieModal, setEditableMovie } = useContext(AppContext);
  const handleClick = () => {
    setEditableMovie({}); 
    setShowMovieModal(true);
  }
  
  return <Btn $isOutline className="ms-auto" onClick={handleClick}>Add movie</Btn>;
};

export default AddItemButton;
