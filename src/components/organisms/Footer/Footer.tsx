import { Container, Text } from "./Footer.styles";
import { IPropsFooter } from "../../../utils/interfaces";

const Footer = ({ isPositionAbsolute }: IPropsFooter) => {
  return (
    <Container isPositionAbsolute={isPositionAbsolute}>
      <Text>© Google 2021</Text>
      <Text>version: 0.1.0</Text>
    </Container>
  );
};

export default Footer;
