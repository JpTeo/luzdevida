import { Col } from "antd";
import { ContentSection, Content, ContentWrapper, StyledRow } from "./style";
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
        <StyledRow justify="space-between" align="middle" direction={direction}>
          <Col xs={24}>
            <ContentWrapper>
              <h5>{title}</h5>
              <Content>{content}</Content>
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default ContentBlockOnlyText;
