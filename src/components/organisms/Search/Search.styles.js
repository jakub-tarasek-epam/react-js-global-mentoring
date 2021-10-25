import styled from "styled-components";
import { colorsPallete, fontSize } from "theme/variables";
import { Col, Button } from "react-bootstrap";

export const Wrapper = styled(Col)`
  padding-top: 60px;
  color: ${colorsPallete.white};

  p {
    padding-bottom: 20px;
    font-size: ${fontSize.xl};
    font-weight: 600;
  }

  input {
    background: ${colorsPallete.almostDark};
    opacity: 0.8;
    border: 0;
    padding: 14px 0 14px 20px;
    color: ${colorsPallete.white};
  }
`;

export const Btn = styled(Button)`
  color: ${colorsPallete.white};
  text-transform: uppercase;
  margin-left: 20px !important;
  border-radius: 4px !important;
  background-color: ${(props) =>
    props.isOutline ? colorsPallete.chicago : colorsPallete.red};
  border: ${(props) =>
    props.isOutline ? 0 : `1px solid ${colorsPallete.red}`};

  &:hover {
    color: ${colorsPallete.red};
    background-color: ${(props) =>
      props.isOutline ? colorsPallete.red : colorsPallete.white};
    border: ${(props) =>
      props.isOutline ? 0 : `1px solid ${colorsPallete.red}`};
  }
`;
