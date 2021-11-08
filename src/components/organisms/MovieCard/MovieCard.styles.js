import styled from "styled-components";

import { Card, Dropdown as Dr } from "react-bootstrap";
import { colorsPallete, fontSize } from "theme/variables";

export const Dots = styled.span`
  height: 40px;
  width: 40px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  user-select: none;
  background-color: ${colorsPallete.almostDark};
  cursor: pointer;

  &:hover {
    span {
      background-color: ${colorsPallete.red};
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${colorsPallete.white};
    margin-bottom: 3px;
  }
`;

export const DropdownMenu = styled(Dr.Menu)`
  inset: 0px 0px auto auto !important;
  background: ${colorsPallete.almostDark};

  a {
    color: ${colorsPallete.white};

    &:hover {
      background: ${colorsPallete.almostDark};
      color: ${colorsPallete.red};
    }
  }
`;

export const Wrapper = styled(Card)`
  background-color: ${colorsPallete.almostDark};
  color: ${colorsPallete.white};
  font-size: ${fontSize.xs};
  border: 0;
  position: relative;
`;

export const CardTitle = styled(Card.Title)`
  font-size: ${fontSize.s};
`;

export const CardBody = styled(Card.Body)`
  padding: 1em 0;

  &:hover .forHover {
    display: block;
  }
`;

export const Dropdown = styled(Dr)`
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;

  ${CardBody}:hover {
    display: block;
  }
`;

export const CardSubtitle = styled(Card.Subtitle)`
  font-size: ${fontSize.xs};
`;

export const CardYear = styled(Card.Text)`
  display: block;
  font-size: ${fontSize.xxs};
  padding: 3px 12px;
  border-radius: 4px;
  opacity: 0.5;
  border: 1px solid ${colorsPallete.grey};
`;

export const CardImg = styled(Card.Img)`
  max-height: 450px;
  height: 450px;
`;
