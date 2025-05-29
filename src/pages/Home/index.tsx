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

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <>
      <WhatsAppButton />
      <ScrollToTop />
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
        <ContentBlock
          direction="left"
          title={ProductContent.title}
          content={ProductContent.text}
          icon="/img/logosNuevos/logo1.png"
          id="product"
          imageSize={{
            height: "auto",
            width: "70%",
          }}
        />
        <br></br>
        <ContentBlockOnlyText
          id="nosotros"
          direction="right"
          title={MissionContent.title}
          content={MissionContent.text}
          button={{
            title: "Ver detalles sobre el equipo",
            router: "/NuestroEquipo",
          }}
        />

        <ProfessionalCards />
        <ContentBlockOnlyText
          id="objetivo"
          direction="left"
          title={ObjetivoContent.title}
          content={ObjetivoContent.text}
        />
        <SliderComponent
          ContentSlider={ContentSlider.image}
          height={"40rem"}
          width={"60rem"}
        />
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

        <FooterWithMap
          address={"Senillosa 324, Cdad. Autónoma de Buenos Aires"}
        />
        <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
