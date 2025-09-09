import { Col, Row } from "antd";
import { Fade } from "react-awesome-reveal";
import { ContentBlockProps } from "./types";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  StyledRow,
  MinTitle,
  MinPara,
  ColText,
  ColImage,
} from "./styles";
import SliderComponent from "../slider/Slider";
import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};
const ContentBlock = ({
  icon,
  imageSize,
  title,
  content,
  sliderContent,
  section,
  fullWidthSlider,
  button,
  id,
  direction,
}: ContentBlockProps) => {
  const windowWidth = useWindowWidth();

  const sliderSize = (() => {
    if (windowWidth < 576) return { height: "30rem", width: "100vw" }; // móvil
    if (windowWidth < 992) return { height: "25rem", width: "25rem" }; // tablet
    return { height: "40rem", width: "30rem" }; // desktop
  })();
  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          align="middle"
          justify={"space-between"}
          id={id}
          direction={direction}
        >
          {icon && (
            <ColImage
              lg={11}
              md={11}
              sm={24}
              xs={24}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SvgIcon
                src={icon}
                width={imageSize.width}
                height={imageSize.height}
              />
            </ColImage>
          )}

          {sliderContent && (
            <ColImage lg={11} md={11} sm={24} xs={24}>
              <SliderComponent
                height={sliderSize.height}
                width={sliderSize.width}
                ContentSlider={sliderContent}
                fullWidth={fullWidthSlider}
              />
            </ColImage>
          )}

          <ColText lg={11} md={12} sm={24} xs={24}>
            <ContentWrapper>
              <h1>{title}</h1>
              <Content>{content}</Content>

              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section?.map((item, id) => (
                      <Col key={id} span={11}>
                        <SvgIcon src={item.icon} width="60px" height="60px" />
                        <MinTitle>{item.title}</MinTitle>
                        <MinPara>{item.content}</MinPara>
                      </Col>
                    ))}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </ColText>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default ContentBlock;
