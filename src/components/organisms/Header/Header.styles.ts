import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #c3c3c3;
`;

export const Menu = styled.img`
  align-self: center;
  cursor: pointer;
`;

export const UserPhoto = styled.img`
  border-radius: 50%;
  cursor: pointer;
  align-self: center;
`;

export const Title = styled.h1`
  font-size: 22px;
  color: #414141;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const LogoGoogle = styled.img`
  width: 120px;
  height: 40px;
  align-self: center;
`;

export const SubTitle = styled.h2`
  align-self: center;
  font-size: 22px;
  color: #414141;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ContainerTitleSubTitle = styled.div`
  align-self: center;
  display: flex;
  gap: 5px;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const ContainerLogoInput = styled.div`
  align-self: center;
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    place-self: start;
  }
`;
