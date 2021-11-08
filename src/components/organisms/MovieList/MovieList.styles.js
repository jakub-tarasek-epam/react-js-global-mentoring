import styled from "styled-components";
import { Row } from "react-bootstrap";
import { colorsPallete } from "../../../theme/variables";

export const RowMain = styled(Row)`
    background-color: ${colorsPallete.almostDark};
    min-height: 50vh;
`;

export const Wrapper = styled.div`
    box-sizing: border-box;
`;

export const Nothing = styled.h2`
    color: ${colorsPallete.white};
    text-align: center;
`;