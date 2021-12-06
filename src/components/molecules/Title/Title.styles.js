import styled from "styled-components";
import {colorsPallete, fontSize} from "theme/variables";

export const Header = styled.h1`
    color: ${colorsPallete.red};
    font-weight: 900;
    font-size: ${props => props.isHeader ? fontSize.xl : fontSize.xs};
    margin: 0;
`;