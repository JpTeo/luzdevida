import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MissionContent from "../../content/MissionContent.json";
import ContactContent from "../../content/ContactContent.json";
import WhatsAppButton from "../../common/Button/Flotante/WhatsApp";
import FooterWithMap from "../../components/Footer";
import Footer from "../../components/Footer/footer";
import FullWidthContentBlock from "../../components/FullWithScreenContentBlock";
import ObjetivoContent from "../../content/Objetivo.json";
import ProductContent from "../../content/ProductContent.json";
import ContentBlockOnlyText from "../../components/onlyTextComponent";
import SliderComponent from "../../components/slider/Slider";
import ContentSlider from "../../content/slider.json";
import InstalacionesContent from "../../content/InstalacionesContent.json";
import ProfessionalCards from "../../components/cardsProfesional/professional-card";
import SEOHead from "../../components/SEOHead";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <>
      <SEOHead
        title="Instituto Luz de Vida |Residencia Geriátrica en Buenos Aires"
        description="Residencia geriátrica en Buenos Aires con 20+ años de experiencia. Atención médica 24/7, rehabilitación y contención emocional para adultos mayores."
        keywords="geriátrico Buenos Aires, residencia adultos mayores, hogar ancianos CABA, centro geriátrico Argentina, cuidado tercera edad, residencia geriátrica premium, atención médica 24/7, rehabilitación adultos mayores, Senillosa 324"
        canonical="https://www.institutoluzdevida.com.ar/"
      />

      <WhatsAppButton />

      <main>
        <FullWidthContentBlock
          icon="/img/googleMaps.png"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          direction={"right"}
          imageSize={{
            height: "100%",
            width: "100%",
          }}
        />

        <Container>
          <br></br>
          <br></br>

          <section id="product" aria-labelledby="product-heading">
            <ContentBlock
              direction="left"
              title={
                <h2 className="text-3xl font-semibold">
                  {ProductContent.title}
                </h2>
              }
              content={ProductContent.text}
              icon="/img/logosNuevos/logo1.png"
              id="product"
              imageSize={{
                height: "auto",
                width: "70%",
              }}
            />
          </section>

          <br></br>

          <section id="nosotros" aria-labelledby="nosotros-heading">
            <ContentBlockOnlyText
              id="nosotros"
              direction="right"
              title={<h2>{MissionContent.title}</h2>}
              content={MissionContent.text}
              button={{
                title: "Ver detalles sobre el equipo",
                router: "/NuestroEquipo",
              }}
            />
          </section>

          <section aria-labelledby="professionals-heading">
            <ProfessionalCards />
          </section>

          <section id="objetivo" aria-labelledby="objetivo-heading">
            <ContentBlockOnlyText
              id="objetivo"
              direction="left"
              title={<h2>{ObjetivoContent.title}</h2>}
              content={ObjetivoContent.text}
            />
          </section>

          <section aria-labelledby="gallery-heading">
            <SliderComponent
              ContentSlider={ContentSlider.image}
              height={"40rem"}
              width={"60rem"}
            />
          </section>

          <section id="servicios" aria-labelledby="servicios-heading">
            <ContentBlock
              direction="right"
              imageSize={{
                height: "100%",
                width: "100%",
              }}
              title={InstalacionesContent.title}
              content={InstalacionesContent.content}
              sliderContent={InstalacionesContent.image}
              fullWidthSlider
              id="servicios"
            />
          </section>

          <section aria-labelledby="location-heading">
            <FooterWithMap
              address={"Senillosa 324, Cdad. Autónoma de Buenos Aires"}
            />
          </section>

          <section id="contact" aria-labelledby="contact-heading">
            <Contact
              title={ContactContent.title}
              content={ContactContent.text}
              id="contact"
            />
          </section>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default Home;
