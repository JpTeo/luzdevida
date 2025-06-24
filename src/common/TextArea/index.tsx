import { StyledTextArea, StyledContainer, Label } from "./styles";
import { InputProps } from "../types";

const TextArea = ({ name, placeholder, onChange, value }: InputProps) => (
  <StyledContainer>
    <Label htmlFor={name} style={{ color: "white" }}>
      {name}
    </Label>
    <StyledTextArea
      placeholder={placeholder}
      id={name}
      name={name}
      onChange={onChange}
      value={value} // ✅ ahora es controlado
    />
  </StyledContainer>
);

export default TextArea;
