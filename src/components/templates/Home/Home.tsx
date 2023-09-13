import SearchHome from "../../molecules/SearchHome";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import { Container, ContainerSearch } from "./Home.styles";

export default function Home() {
  return (
    <Container>
      <Header typeHeader="home" />
      <ContainerSearch>
        <SearchHome />
      </ContainerSearch>
      <Footer isPositionAbsolute />
    </Container>
  );
}
