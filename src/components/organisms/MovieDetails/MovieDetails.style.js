import styled from "styled-components";

import { Row, Stack as St } from "react-bootstrap";
import { colorsPallete, fontSize } from "theme/variables";

import { VscChromeClose } from "react-icons/vsc";

export const Wrapper = styled(Row)`
  background-color: ${colorsPallete.almostDark};
  color: ${colorsPallete.white};
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Close = styled(VscChromeClose)`
  font-size: ${fontSize.xl};
  cursor: pointer;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Stack = styled(St)`
  margin-bottom: 20px;
`;

export const Raiting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: solid ${colorsPallete.white} 1px;
  padding: 5px;
  width: 60px;
  height: 60px;
  margin-left: 40px;
`;

export const MovieTitle = styled.h3`
  display: inline-block;
  color: ${colorsPallete.white};
  font-size: ${fontSize.xxl};
  font-weight: 300;
  margin: 0;
`;

export const Genre = styled.p`
  margin-top: 10px;
  color: ${colorsPallete.grayFuscous};
  font-size: ${fontSize.xs};
  font-weight: 500;
`;

export const Info = styled.span`
  color: ${colorsPallete.red};
  font-size: ${fontSize.m};
  font-weight: 300;
  margin-right: 50px;
`;

export const Description = styled.p`
  color: ${colorsPallete.grayFuscous};
  font-size: ${fontSize.xs};
  font-weight: 300;
  margin-top: 20px;
`;
