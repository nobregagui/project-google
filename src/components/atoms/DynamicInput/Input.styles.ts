import styled from "styled-components";

export const Container = styled.div``;

export const ContainerInput = styled.div`
  position: relative;
  width: 463px;
  height: 53px;

  @media (max-width: 768px) {
    width: auto;
  }
`;

export const Input = styled.input`
  display: flex;
  /* width: 370px; */
  width: -webkit-fill-available;
  height: 44px;
  padding: 0px 55px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border-radius: 50px;
  border: 1px solid #dbdbdb;

  ::placeholder {
    color: #292929;
    /* font-feature-settings: "clig" off, "liga" off; */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }
`;

export const Icon = styled.img`
  position: absolute;
  top: 45%;
  left: 20px; /* Ajuste a posição do ícone conforme necessário */
  transform: translateY(-50%);
  color: gray;
  cursor: pointer;
`;

export const IconClose = styled.img`
  position: absolute;
  top: 45%;
  right: 20px; /* Ajuste a posição do ícone conforme necessário */
  transform: translateY(-50%);
  color: gray;
  cursor: pointer;
  width: 16px;
  height: 16px;
`;

export const Label = styled.label`
  color: var(--neutros-8, #292929);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 16px */
`;
