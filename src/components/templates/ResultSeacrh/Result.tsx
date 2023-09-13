import { useEffect } from "react";
import Header from "../../organisms/Header";
import { useDataContext } from "../../../context/DataContext";
import data from "../../../data/data";
import {
  ContainerData,
  ContainerDataSearch,
  DescriptionSearch,
  TitleSearch,
  UrlSearch,
  ContainerImage,
  TitleImage,
  MensageIfNotValue,
  MensageIfNotFound,
  ContainerNotFound,
  ContainerImageModal,
} from "./Result.styles";
import { handleInputChangeTest } from "../../../utils/functions";
import ModalComponent from "../../atoms/Modal/Modal";
import Footer from "../../organisms/Footer";

const Results = () => {
  const {
    dataSearch,
    setDataSearch,
    image,
    setImage,
    selectItem,
    setSelectItem,
    query,
    setQuery,
    isModalOpen,
    setIsModalOpen,
  } = useDataContext();

  useEffect(() => {
    setDataSearch(
      data.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.type.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, setDataSearch]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Header
        typeHeader="result"
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
        value={query}
      />
      {query && (
        <ContainerData>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {dataSearch.map((item) => (
              <ContainerDataSearch
                key={item.id}
                onClick={() => {
                  setSelectItem(item);
                  setImage(true);
                  openModal();
                }}
              >
                <UrlSearch>{item.url}</UrlSearch>
                <TitleSearch>{item.title}</TitleSearch>
                <DescriptionSearch>{item.description}</DescriptionSearch>
              </ContainerDataSearch>
            ))}
          </div>
          {image && query.length !== 0 && (
            <>
              <ContainerImage>
                <img src={selectItem.image} alt="" />
                <UrlSearch>{selectItem.url}</UrlSearch>
                <TitleImage>{selectItem.title}</TitleImage>
                <DescriptionSearch>{selectItem.description}</DescriptionSearch>
              </ContainerImage>
              <ModalComponent isOpen={isModalOpen} onClose={closeModal}>
                <ContainerImageModal>
                  <img src={selectItem.image} alt="" />
                  <UrlSearch>{selectItem.url}</UrlSearch>
                  <TitleImage>{selectItem.title}</TitleImage>
                  <DescriptionSearch>
                    {selectItem.description}
                  </DescriptionSearch>
                </ContainerImageModal>
              </ModalComponent>
            </>
          )}
        </ContainerData>
      )}
      <ContainerNotFound>
        {query && dataSearch.length === 0 && (
          <MensageIfNotFound>
            No results found for <span>"{query}"</span>
          </MensageIfNotFound>
        )}
        {query.length === 0 && (
          <MensageIfNotValue>
            Try looking for:{" "}
            <span>
              insect, fish, horse, crocodilia, bear, cetacean, cow, lion,
              rabbit, cat, snake, dog, bird
            </span>
          </MensageIfNotValue>
        )}
        {dataSearch.length === 0 && (
          <MensageIfNotValue>
            Try looking for:{" "}
            <span>
              insect, fish, horse, crocodilia, bear, cetacean, cow, lion,
              rabbit, cat, snake, dog, bird
            </span>
          </MensageIfNotValue>
        )}
      </ContainerNotFound>
      <Footer
        isPositionAbsolute={
          dataSearch.length < 6 || dataSearch.length === 0 || query.length === 0
        }
      />
    </div>
  );
};

export default Results;
