import { Row } from "antd";
import styled from "styled-components";
interface StyledRowProps {
  direction: "left" | "right";
}
export const ContentSection = styled("section")`
  position: relative;
  margin-top: 5%;
`;
export const StyledRow = styled(Row).withConfig({
  shouldForwardProp: (prop) => prop !== "direction",
})<StyledRowProps>`
  display: flex;
  display: flex;
  aling-items: center;
  justify-content: center;
  flex-direction: ${({ direction }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContainerText = styled("p")`
  font-size: 1.5rem;
  width: 100%;
  padding-bottom: 2%;
  padding: 0 15%;
`;
