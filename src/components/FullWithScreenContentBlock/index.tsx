"use client";

import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import type { ContentBlockProps } from "../ContentBlock/types";
import { Button } from "../../common/Button";
import {
  TextHighlight,
  HeroSection,
  HeroContent,
  MainHeading,
  ButtonContainer,
  StyledContent,
  IntroParagraph,
} from "./styles";
import { redirectWhatsApp } from "../../common/utils/ContactsRedirect";
const FullWidthContentBlock = ({ icon, title, button }: ContentBlockProps) => {
  return (
    <>
      <HeroSection $backgroundImage={`${icon}`}>
        <HeroContent>
          <Row style={{ height: "100%" }}>
            <Col
              xs={24}
              lg={24}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Fade direction="left" triggerOnce>
                <StyledContent>
                  {/* ✅ H1 ÚNICO Y OPTIMIZADO */}
                  <TextHighlight>Instituto Luz de Vida</TextHighlight>
                  <MainHeading>
                    Residencia Geriátrica Premium en Buenos Aires
                  </MainHeading>
                  {/* ✅ Párrafo introductorio con keywords para SEO */}
                  <IntroParagraph>
                    En <strong>Instituto Luz de Vida </strong>
                    ofrecemos <strong> atención médica 24/7</strong>, programas
                    de <strong>rehabilitación</strong> y{" "}
                    <strong>contención emocional</strong> para{" "}
                    <strong>adultos mayores</strong>, con más de{" "}
                    <strong>20 años de experiencia</strong>.
                  </IntroParagraph>

                  {/* ✅ Subtítulo actual conservado como H2 */}

                  <ButtonContainer>
                    {button?.map(({ title }) => (
                      <Button onClick={redirectWhatsApp} key={title}>
                        {title}
                      </Button>
                    ))}
                  </ButtonContainer>
                </StyledContent>
              </Fade>
            </Col>
          </Row>
        </HeroContent>
      </HeroSection>
    </>
  );
};

export default FullWidthContentBlock;
