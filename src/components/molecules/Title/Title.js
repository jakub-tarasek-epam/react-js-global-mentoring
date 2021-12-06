import React from "react";
import { Header } from "./Title.styles";
import { Link } from "react-router-dom";

const Title = ({ isHeader }) => {
  return <Header isHeader={isHeader}>NetflixRoulette</Header>;
};

export default Title;
