import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  /* justify-content: center; */
`;

export const LogoGoogle = styled.img`
  width: 272px;
  height: 92px;
  align-self: center;
  @media (max-width: 768px) {
    width: 175px;
    height: 60px;
  }
`;

export const ButtonSearch = styled.button`
  border: none;
  width: fit-content;
  font-size: 18px;
  padding: 10px;
  align-self: center;
  cursor: pointer;

`;
