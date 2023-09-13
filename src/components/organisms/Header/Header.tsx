// Header.tsx
import React from "react";
import {
  Container,
  Menu,
  ContainerTitleSubTitle,
  Title,
  SubTitle,
  ContainerMenu,
  UserPhoto,
  LogoGoogle,
  ContainerLogoInput,
} from "./Header.styles";
import { IPropsHeader } from "../../../utils/interfaces";
import DynamicInput from "../../atoms/DynamicInput";
import { Link } from "react-router-dom";
const Header = ({ typeHeader, value, onChange }: IPropsHeader) => {
  return (
    <Container>
      {typeHeader === "home" && (
        <ContainerTitleSubTitle>
          <Title>Agile Content</Title>
          <SubTitle>Frontend Test</SubTitle>
        </ContainerTitleSubTitle>
      )}
      {typeHeader === "result" && (
        <ContainerLogoInput>
          <Link to={`/`}>
            <LogoGoogle src="../../../../img/logoGoogle.png" />
          </Link>
          <DynamicInput value={value} onChange={onChange} />
        </ContainerLogoInput>
      )}
      <ContainerMenu>
        <Menu src="../../../../img/menu-de-pontos.png" />
        <UserPhoto
          width={38}
          height={38}
          src="../../../../img/fotoPerfil.jpeg"
        />
      </ContainerMenu>
    </Container>
  );
};

export default Header;
