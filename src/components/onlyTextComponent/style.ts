import { Row } from "antd";
import styled from "styled-components";
interface StyledRowProps {
  direction: "left" | "right";
}
export const ContentSection = styled("div")`
  position: relative;
  background: blue;
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
