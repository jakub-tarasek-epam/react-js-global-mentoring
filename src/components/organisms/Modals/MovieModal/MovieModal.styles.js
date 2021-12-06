import styled from "styled-components";

import { Modal, Button } from "react-bootstrap";
import { colorsPallete, fontSize } from "theme/variables";

export const Wrapper = styled(Modal)`
  color: ${colorsPallete.white};

  .modal-header {
    .modal-title {
      font-weight: 300;
    }

    border: none;
  }

  .form-label {
    color: ${colorsPallete.red};
    font-size: ${fontSize.xs};
    text-transform: uppercase;
  }

  .modal-footer {
    border: none;
  }

  .modal-dialog{
    max-width: 80%;
  }

  .form-control,.form-select{
      background: ${colorsPallete.grayFuscous};
      border: none;
      opacity: 1;
      color: ${colorsPallete.white};
  }

  .modal-content {
    background: ${colorsPallete.black};
  }

  .btn-close {
    color: ${colorsPallete.white};
  }
`;

export const Btn = styled(Button)`
  color: ${colorsPallete.white};
  text-transform: uppercase;
  font-weight: 300;
  font-size: ${fontSize.xs};
  margin-left: 20px !important;
  padding: 8px 14px;
  border-radius: 4px !important;
  background-color: ${(props) =>
    props.isOutline ? colorsPallete.almostDark : colorsPallete.red};
  border-width: "1px";
  border-style: solid;
  border-color: ${colorsPallete.red};

  &:hover {
    color: ${(props) =>
      props.isOutline ? colorsPallete.white : colorsPallete.red};
    background-color: ${(props) =>
      props.isOutline ? colorsPallete.red : colorsPallete.white};
    border-width: "1px";
    border-style: solid;
    border-color: ${colorsPallete.red};
  }

  &:focus {
    color: ${colorsPallete.red};
    background-color: ${colorsPallete.white};
    border: ${(props) =>
    props.$isOutline ? 0 : `1px solid ${colorsPallete.red}`};
    box-shadow: none;
  }
`;
