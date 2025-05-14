import { Col } from "antd";
import { ContentSection, ContentWrapper, StyledRow } from "./style";
import { Fade } from "react-awesome-reveal";

export interface ContentBlockProps {
  title: string;
  content: string;
  direction: "left" | "right";
}

const ContentBlockOnlyText = ({
  title,
  content,
  direction,
}: ContentBlockProps) => {
  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow align="middle" direction={direction}>
          <ContentWrapper>
            <h5>{title}</h5>
            <p style={{ width: "70%", margin: "0 auto" }}>{content}</p>
          </ContentWrapper>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default ContentBlockOnlyText;
