import { Col, Row } from "antd";
import { Fade } from "react-awesome-reveal";
import { ContentBlockProps } from "./types";
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
} from "./styles";
import SliderComponent from "../slider/Slider";

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
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          {icon && (
            <Col
              lg={11}
              md={11}
              sm={12}
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
            </Col>
          )}
          {sliderContent && (
            <Col lg={11} md={11} sm={12} xs={24}>
              <div>
                <SliderComponent
                  ContentSlider={sliderContent}
                  fullWidth={fullWidthSlider}
                />
              </div>
            </Col>
          )}
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{title}</h6>
              <Content>{content}</Content>
              <ButtonWrapper>
                {button?.map(
                  (
                    item: {
                      color?: string;
                      title: string;
                    },
                    id: number
                  ) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        onClick={() => scrollTo("about")}
                      >
                        {item.title}
                      </Button>
                    );
                  }
                )}
              </ButtonWrapper>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section?.map(
                      (
                        item: {
                          title: string;
                          content: string;
                          icon: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Col key={id} span={11}>
                            <SvgIcon
                              src={item.icon}
                              width="60px"
                              height="60px"
                            />
                            <MinTitle>{item.title}</MinTitle>
                            <MinPara>{item.content}</MinPara>
                          </Col>
                        );
                      }
                    )}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default ContentBlock;
