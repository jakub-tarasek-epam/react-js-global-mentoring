import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";
import { colorsPallete } from "theme/variables";

export const Wrapper = styled(Modal)`
  color: ${colorsPallete.white};

  .modal-header {
    .modal-title {
      font-weight: 300;
    }

    border: none;
  }

  .modal-footer {
    border: none;
  }

  .modal-content {
    background: ${colorsPallete.black};
  }

  .btn-close{
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

  &:focus {
    color: ${colorsPallete.red};
    background-color: ${colorsPallete.white};
    border: ${(props) =>
    props.$isOutline ? 0 : `1px solid ${colorsPallete.red}`};
    box-shadow: none;
  }
`;
