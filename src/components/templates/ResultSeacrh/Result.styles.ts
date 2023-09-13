import styled from "styled-components";

export const ContainerData = styled.div`
  display: flex;
  padding: 0px 80px;
  gap: 90px;
  margin-top: 80px;
  @media (max-width: 768px) {
    padding: 0px 20px;
    margin-top: 40px;
  }
`;

export const ContainerDataSearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
  max-width: 1170px;
  cursor: pointer;
`;

export const UrlSearch = styled.p`
  color: #4d5156;
  font-size: 12px;
  line-height: 18px;
`;

export const TitleSearch = styled.h1`
  color: #1a0dab;
  line-height: 1.3;
  font-size: 20px;
  font-family: arial, sans-serif;
  font-weight: 400;
`;

export const DescriptionSearch = styled.p`
  color: #4d5156;
  font-size: 14px;
  line-height: 1.58;
`;

export const TitleImage = styled.h1`
  color: #4d5156;
  line-height: 1.3;
  font-size: 20px;
  font-family: arial, sans-serif;
`;

export const ContainerImage = styled.div`
  img {
    width: 100%;
  }
  max-width: 400px;
  border: 1px solid #c3c3c3;
  height: fit-content;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerImageModal = styled.div`
  display: none;
  @media (max-width: 768px) {
    img {
      width: 100%;
    }
    h1 {
      font-size: 16px;
    }
    max-width: 400px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 7px;
    text-align: start;
  }
`;

export const MensageIfNotValue = styled.p`
  color: #4d5156;
  line-height: 1.3;
  font-size: 18px;
  font-family: arial, sans-serif;
  margin-top: 10px;

  span {
    font-weight: bold;
  }
`;

export const MensageIfNotFound = styled.p`
  color: #4d5156;
  line-height: 1.3;
  font-size: 18px;
  font-family: arial, sans-serif;
  span {
    font-weight: bold;
  }
`;

export const ContainerNotFound = styled.div`
  padding-left: 45px;
  @media (max-width: 768px) {
    padding-left: 25px;
    padding-right: 5px;
  }
`;
