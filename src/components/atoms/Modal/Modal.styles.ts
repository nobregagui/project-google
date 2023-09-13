import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: none;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Modal = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 2px;
  max-width: 80%;
  text-align: center;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
`;
