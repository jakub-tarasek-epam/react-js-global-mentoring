import styled from "styled-components";
import { Button } from "react-bootstrap";
import {colorsPallete} from "theme/variables";

export const Btn = styled(Button)`
   color: ${colorsPallete.red};
   text-transform: uppercase;
   background-color: ${props => props.$isOutline ? colorsPallete.chicago : colorsPallete.red};
   border: ${props => props.$isOutline ? 0 : `1px solid ${colorsPallete.red}`};

   &:hover{
      background-color: ${props => props.$isOutline ? colorsPallete.red : colorsPallete.chicago};
   }
`;