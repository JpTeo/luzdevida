import { ContainerProps } from "../types";
import { StyledContainer } from "./styles";

const HeaderContainer = ({ children }: ContainerProps) => (
  <StyledContainer>{children}</StyledContainer>
);

export default HeaderContainer;
