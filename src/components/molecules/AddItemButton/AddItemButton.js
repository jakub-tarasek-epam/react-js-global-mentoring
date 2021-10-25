import React from "react";
import { Btn } from "./AddItemButton.style";

const AddItemButton = () => {

  const handleClick = () => {
  }
  
  return <Btn $isOutline className="ms-auto" onClick={handleClick}>Add movie</Btn>;
};

export default AddItemButton;
