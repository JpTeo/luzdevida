import { Card, Image } from "antd";
import styled from "styled-components";

export const CardStyles = styled(Card)`
  position: relative;
  background: #d3d3d3;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  padding: 0 2%;
  height: 20vw;
  @media only screen and (min-width: 575px) and (max-width: 1024px) {
    padding-bottom: 0rem;
    height: 28vw !important;
  }
  @media only screen and (min-width: 320px) and (max-width: 575px) {
    height: fit-content;
  }
  @media only screen and (min-width: 1024px) {
    height: fit-content;
    height: 20vw;
  }
`;
export const ImageStyle = styled(Image)`
  object-fit: contain;
  background: white;
  border-radius: 20px;
  width: 100%;
  @media only screen and (min-width: 575px) and (max-width: 1024px) {
    height: 10vw;
  }
  @media only screen and (min-width: 320px) and (max-width: 575px) {
    height: 20vw;
  }
`;
