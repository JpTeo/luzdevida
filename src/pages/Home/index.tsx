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
import { Button } from "../../common/Button";
import { useHistory } from "react-router-dom";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  const history = useHistory();

  return (
    <>
      {/* SEO principal */}
      <SEOHead
        title="Instituto Luz de Vida | Residencia Geriátrica en Buenos Aires"
        description="Residencia geriátrica premium en Buenos Aires. 20+ años de experiencia, atención médica 24/7, rehabilitación y contención emocional para adultos mayores."
        keywords="geriátrico Buenos Aires, residencia adultos mayores, hogar ancianos CABA, centro geriátrico Argentina, cuidado tercera edad, residencia geriátrica premium, atención médica 24/7, rehabilitación adultos mayores, Senillosa 324"
        canonical="https://www.institutoluzdevida.com.ar/"
      />

      <WhatsAppButton />
      <FullWidthContentBlock
        icon="/img/googleMaps.png"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        direction="right"
        imageSize={{
          height: "100%",
          width: "100%",
        }}
      />

      <Container>
        <br />
        <br />

        {/* Servicios */}
        <section id="product" aria-labelledby="product-heading">
          <h2 id="product-heading">{ProductContent.title}</h2>
          <ContentBlock
            direction="left"
            title={null}
            content={ProductContent.text}
            icon="/img/logosNuevos/logo1.png"
            id="product"
            imageSize={{
              height: "auto",
              width: "70%",
            }}
          />
        </section>

        <br />

        {/* Nosotros */}
        <section id="nosotros" aria-labelledby="nosotros-heading">
          <h2 id="nosotros-heading">{MissionContent.title}</h2>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <Button
              onClick={() => {
                history.push("/NuestroEquipo");
              }}
            >
              Ver detalles sobre el equipo
            </Button>
          </div>
          <ProfessionalCards />
        </section>
        <section id="objetivo" aria-labelledby="objetivo-heading">
          <h2 id="objetivo-heading">{ObjetivoContent.title}</h2>
          <p style={{ textAlign: "center" }}>{ObjetivoContent.text}</p>
        </section>
        <section aria-labelledby="gallery-heading">
          <h2 id="gallery-heading">Instalaciones y Servicios</h2>
          <SliderComponent
            ContentSlider={ContentSlider.image}
            height="40rem"
            width="60rem"
          />
        </section>

        {/* Servicios ampliados */}
        <section id="servicios" aria-labelledby="servicios-heading">
          <h2 id="servicios-heading">{InstalacionesContent.title}</h2>
          <ContentBlock
            direction="right"
            imageSize={{
              height: "100%",
              width: "100%",
            }}
            title={null}
            content={InstalacionesContent.content}
            sliderContent={InstalacionesContent.image}
            fullWidthSlider
            id="servicios"
          />
        </section>

        {/* Mapa */}
        <section aria-labelledby="location-heading">
          <h2 id="location-heading">Cómo llegar a Instituto Luz de Vida</h2>
          <FooterWithMap address="Senillosa 324, Cdad. Autónoma de Buenos Aires" />
        </section>
        <section id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading">{ContactContent.title}</h2>
          <Contact
            title={ContactContent.title}
            content={ContactContent.text}
            id="contact"
          />
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
