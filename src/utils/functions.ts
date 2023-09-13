import { IPropsHandleData } from "./interfaces";

export function handleInputChangeTest(
  { query, setImage, setQuery, setSelectItem }: IPropsHandleData,
  e: React.ChangeEvent<HTMLInputElement>
) {
  setQuery(e.target.value);
  if (query.length === 0) {
    setImage(false);
    setSelectItem({
      description: "",
      id: 0,
      image: "",
      title: "",
      type: "",
      url: "",
    });
  }
}
