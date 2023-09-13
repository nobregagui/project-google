import styled from "styled-components";
import { IPropsFooter } from "../../../utils/interfaces";


export const Container = styled.div<IPropsFooter>`
  display: flex;
  justify-content: space-between;
  position: ${({ isPositionAbsolute }) => (isPositionAbsolute ? "absolute" : "relative")};
  bottom: 0;
  width: -webkit-fill-available;
  background-color: #F2F2F2;
  padding: 16px;
`;

export const Text = styled.h2`
  color: #414141;
  font-weight: 400;
  font-size: 18px;
  align-self: center;
`;