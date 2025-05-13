import { Row } from "antd";
import styled from "styled-components";
interface StyledRowProps {
  direction: "left" | "right";
}
export const ContentSection = styled("section")`
  position: relative;
  padding: 2rem;
  @media only screen and (max-width: 1024px) {
    padding-bottom: 10rem;
  }
`;
export const Content = styled("p")`
  width: 100%;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
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
  text-align: center;
  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;
