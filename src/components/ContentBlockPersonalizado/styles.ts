import { Row } from "antd";
import styled from "styled-components";
import { Col } from "antd";
interface StyledRowProps {
  direction: "left" | "right";
}

export const ContentSection = styled("section")`
  position: relative;
  margin-top: 15%;
  @media only screen and (max-width: 1024px) {
    padding-bottom: 0rem;
  }
`;
export const Content = styled("p")`
  white-space: pre-line;
  font-size: 1.2rem !important;
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
  display: inline-block;
  aling-items: center;
  justify-content: center;
  width: 100% !important;
  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
  button:last-child {
    @media only screen and (max-width: 768px) {
    }
  }
`;
// styles.ts

export const ColImage = styled(Col)`
  order: 2;

  @media (min-width: 768px) {
    order: 1 !important;
  }
`;

export const ColText = styled(Col)`
  order: 1;
  @media (min-width: 768px) {
    order: 2;
  }
`;
