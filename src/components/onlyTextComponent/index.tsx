import { ReactNode } from "react";
import { Button } from "../../common/Button";
import { ContentSection, StyledRow } from "./style";
import { Fade } from "react-awesome-reveal";
import { useHistory } from "react-router-dom";

export interface ContentBlockProps {
  title: ReactNode;
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
          <h2 style={{ textAlign: "center" }}>{title}</h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              width: "100%",
            }}
          >
            {content}
          </p>
          {button && (
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "red",
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
