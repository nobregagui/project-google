export interface IPropsButtonDynamic {
  srcImage?: string;
  text?: string;
  typeButton?: "primary" | "secondary" | undefined;
  hasIcon?: boolean;
  linkButton?: string;
}

export interface IPropsInputDynamic {
  label?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string;
}

export interface IPropsData {
  type: string;
  id: number;
  url: string;
  title: any;
  description: string;
  image: string;
}

export interface IPropsModal {
  isOpen: boolean;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export interface IPropsHeader {
  typeHeader: "home" | "result";
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string;
}

export interface IPropsFooter {
  isPositionAbsolute: boolean;
}

export interface IPropsHandleData {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setImage: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectItem: React.Dispatch<React.SetStateAction<IPropsData>>;
}

export interface DataContextType {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dataSearch: IPropsData[];
  setDataSearch: React.Dispatch<React.SetStateAction<IPropsData[]>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  image: boolean;
  setImage: React.Dispatch<React.SetStateAction<boolean>>;
  selectItem: IPropsData;
  setSelectItem: React.Dispatch<React.SetStateAction<IPropsData>>;
}
