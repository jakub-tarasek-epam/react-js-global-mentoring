import { Row, Stack as StackBt, ToggleButton as ToggleBtn, ToggleButtonGroup as ToggleBtnGr } from "react-bootstrap";
import styled from "styled-components";

import { colorsPallete } from "theme/variables";

export const Wrapper = styled(Row)`
    background-color: ${colorsPallete.almostDark};
    color: ${colorsPallete.mystic};
    padding: 20px 0;
`;

export const ToggleButtonGroup = styled(ToggleBtnGr)`
    .btn-check:checked+.btn-primary{
        box-shadow: none;
        background: ${colorsPallete.red};
    }
`;

export const ToggleButton = styled(ToggleBtn)`
    background: none;
    border: none;
    box-shadow: none;

    &:hover{
        background: ${colorsPallete.red};
    }
`;

export const Stack = styled(StackBt)`
    padding-top: 10px;
    padding-bottom: 10px;

    div{
        cursor: pointer;
    }

    select{
        position: relative;
        bottom: 1px;
        cursor: pointer;
        background: transparent;
        border: none;
        opacity: 1;
        color: ${colorsPallete.red};
        outline: none;
    }
`;