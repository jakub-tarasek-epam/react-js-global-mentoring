import styled from "styled-components";
import { Button } from "react-bootstrap";
import { colorsPallete } from "theme/variables";

export const Btn = styled(Button)`
  color: ${colorsPallete.red};
  text-transform: uppercase;
  background-color: ${(props) =>
    props.$isOutline ? colorsPallete.chicago : colorsPallete.red};
  border: ${(props) =>
    props.$isOutline ? 0 : `1px solid ${colorsPallete.red}`};
    outline: none;

  &:hover {
    background-color: ${(props) =>
      props.$isOutline ? colorsPallete.red : colorsPallete.chicago};
  }

  &:focus {
    color: ${colorsPallete.red};
    background-color: ${colorsPallete.white};
    border: ${(props) =>
    props.$isOutline ? 0 : `1px solid ${colorsPallete.red}`};
    box-shadow: none;
  }
`;
