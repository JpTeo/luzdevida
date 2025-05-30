import { Fade } from "react-awesome-reveal";
import { ContentBlockCopyProps } from "./types";
import { Button } from "../../common/Button";
import {
  ContentSection,
  Content,
  ContentWrapper,
  StyledRow,
  ButtonWrapper,
  MinTitle,
  ColText,
  ColImage,
} from "./styles";

const ContentBlockCopy = ({
  Icon,
  title,
  content,
  button,
  id,
  direction,
  name,
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
              <h6>{name}</h6>
              <MinTitle>{title}</MinTitle>
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
            </ContentWrapper>
          </ColText>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default ContentBlockCopy;
