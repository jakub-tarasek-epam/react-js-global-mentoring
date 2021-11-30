import React from "react";
import { RowMain, Wrapper, Nothing } from "./NotFound.styles";

const NotFound = () => {
  return (
    <RowMain>
      <Wrapper>
        <Nothing>Nothing found...</Nothing>
      </Wrapper>
    </RowMain>
  );
};

export default NotFound;
