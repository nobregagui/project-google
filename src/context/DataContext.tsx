import React, { createContext, useContext, useState } from "react";
import { DataContextType, IPropsData } from "../utils/interfaces";
const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC = ({ children }) => {
  const [dataSearch, setDataSearch] = useState<IPropsData[]>([
    {
      description: "",
      id: 0,
      image: "",
      title: "",
      type: "",
      url: "",
    },
  ]);
  const [query, setQuery] = useState<string>("");
  const [image, setImage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectItem, setSelectItem] = useState<IPropsData>({
    description: "",
    id: 0,
    image: "",
    title: "",
    type: "",
    url: "",
  });

  return (
    <DataContext.Provider
      value={{
        dataSearch,
        setDataSearch,
        query,
        setQuery,
        image,
        setImage,
        selectItem,
        setSelectItem,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext deve ser usado dentro de um DataProvider");
  }
  return context;
};
