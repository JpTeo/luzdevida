import { Button } from "../../common/Button";
import { ContainerText, ContentSection, StyledRow } from "./style";
import { Fade } from "react-awesome-reveal";
import { useHistory } from "react-router-dom";

export interface ContentBlockProps {
  title: string;
  content: string;
  direction: "left" | "right";
  id: string;
  button?: {
    title: string;
    router: string;
  };
}

const ContentBlockOnlyText = ({
  title,
  content,
  direction,
  id,
  button,
}: ContentBlockProps) => {
  const history = useHistory();

  // Para redirigir:

  return (
    <ContentSection id={id}>
      <Fade direction={direction} triggerOnce>
        <StyledRow align="middle" direction={direction}>
          <h5>{title}</h5>
          <ContainerText>{content}</ContainerText>
          {button && (
            <div
              style={{
                marginBottom: "2vw",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={() => {
                  history.push(button.router);
                }}
              >
                {button.title}
              </Button>
            </div>
          )}
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default ContentBlockOnlyText;
