import {
  Container,
  Label,
  ContainerInput,
  Icon,
  Input,
  IconClose,
} from "./Input.styles";
import { IPropsInputDynamic } from "../../../utils/interfaces";
import { useDataContext } from "../../../context/DataContext";
export default function InputComponent({
  label,
  placeholder,
  onChange,
  value,
}: IPropsInputDynamic) {
  const { setQuery } = useDataContext();

  return (
    <Container>
      <Label>{label}</Label>
      <ContainerInput>
        <Icon src="../../../../img/lupa.png" />
        <Input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type="text"
        />
        {value && value.length !== 0 && (
          <IconClose
            onClick={() => setQuery("")}
            src="../../../../img/botao-fechar.png"
          />
        )}
      </ContainerInput>
    </Container>
  );
}
