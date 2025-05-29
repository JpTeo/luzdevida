import { Col, Row } from "antd";
import { Fade } from "react-awesome-reveal";
import { ContentBlockCopyProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  StyledRow,
  ButtonWrapper,
  MinTitle,
  MinPara,
  ColText,
  ColImage,
} from "./styles";
import SliderComponent from "../slider/Slider";

const ContentBlockCopy = ({
  Icon,
  imageSize,
  title,
  content,
  sliderContent,
  section,
  fullWidthSlider,
  button,
  id,
  direction,
}: ContentBlockCopyProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          align="middle"
          justify={"space-between"}
          id={id}
          direction={direction}
        >
          {Icon && (
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
              {Icon}
            </ColImage>
          )}

          <ColText lg={11} md={12} sm={24} xs={24}>
            <ContentWrapper>
              <h6>{title}</h6>
              <Content>{content}</Content>
              <ButtonWrapper>
                {button?.map((item, id) => (
                  <Button
                    key={id}
                    color={item.color}
                    onClick={() => scrollTo("about")}
                  >
                    {item.title}
                  </Button>
                ))}
              </ButtonWrapper>
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

export default ContentBlockCopy;
