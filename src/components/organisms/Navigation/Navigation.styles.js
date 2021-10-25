import { Row, Stack as StackBt } from "react-bootstrap";
import styled from "styled-components";

import { colorsPallete } from "theme/variables";

export const Wrapper = styled(Row)`
    background-color: ${colorsPallete.almostDark};
    color: ${colorsPallete.mystic};
    padding: 20px 0;
`;

export const Stack = styled(StackBt)`
    padding-top: 10px;
    padding-bottom: 10px;

    div{
        cursor: pointer;
    }
`;