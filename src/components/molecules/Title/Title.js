import React from "react";
import { Header } from "./Title.styles";

const Title = ({ isHeader }) => {
  return <Header isHeader={isHeader}>NetflixRoulette</Header>;
};

export default Title;
