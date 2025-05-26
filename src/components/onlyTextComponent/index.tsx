import {
  ContainerText,
  ContentSection,
  ContentWrapper,
  StyledRow,
} from "./style";
import { Fade } from "react-awesome-reveal";

export interface ContentBlockProps {
  title: string;
  content: string;
  direction: "left" | "right";
  id: string;
}

const ContentBlockOnlyText = ({
  title,
  content,
  direction,
  id,
}: ContentBlockProps) => {
  return (
    <ContentSection id={id}>
      <Fade direction={direction} triggerOnce>
        <StyledRow align="middle" direction={direction}>
          <ContentWrapper>
            <h5>{title}</h5>
            <ContainerText>{content}</ContainerText>
          </ContentWrapper>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default ContentBlockOnlyText;
