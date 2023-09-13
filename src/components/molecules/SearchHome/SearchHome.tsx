import { Container, LogoGoogle, ButtonSearch } from "./SearchHome.styles";
import DynamicInput from "../../atoms/DynamicInput";
import { Link } from "react-router-dom";
import { useDataContext } from "../../../context/DataContext";
import { useEffect } from "react";
import data from "../../../data/data";
import { handleInputChangeTest } from "../../../utils/functions";

export default function SearchHome() {
  const { setDataSearch, setImage, setSelectItem, query, setQuery } =
    useDataContext();

  useEffect(() => {
    setDataSearch(
      data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, setDataSearch]);

  return (
    <Container>
      <LogoGoogle src="../../../../img/logoGoogle.png" />
      <DynamicInput
        value={query}
        onChange={(e) =>
          handleInputChangeTest(
            {
              query: query,
              setImage: setImage,
              setQuery: setQuery,
              setSelectItem: setSelectItem,
            },
            e
          )
        }
      />
      <Link style={{ alignSelf: "center" }} to={`/results`}>
        <ButtonSearch disabled={query.length === 0}>Buscar</ButtonSearch>
      </Link>
    </Container>
  );
}
