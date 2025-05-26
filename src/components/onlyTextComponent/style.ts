import { Row } from "antd";
import styled from "styled-components";
interface StyledRowProps {
  direction: "left" | "right";
}
export const ContentSection = styled("section")`
  position: relative;
  margin: 5%;
`;
export const StyledRow = styled(Row).withConfig({
  shouldForwardProp: (prop) => prop !== "direction",
})<StyledRowProps>`
  flex-direction: ${({ direction }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  width: 100%;
  display: flex;
  align-tems: center;
  flex-direction: column;
  justify-content: flex-start !important;
  text-align: center;
  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const ContainerText = styled("p")`
  font-size: 1.5rem;
  width: 70%;
  margin: auto;
  padding-bottom: 2%;
  @media only screen and (max-width: 575px) {
    width: 100%;
  }
`;
