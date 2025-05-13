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

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <>
      <WhatsAppButton />
      <ScrollToTop />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <FullWidthContentBlock
        icon="/img/svg/luzdevidahome.png"
        title={IntroContent.title}
        content={IntroContent.text}
        id="intro"
        button={IntroContent.button}
        direction={"right"}
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
        />
        <ContentBlock
          direction="right"
          title={MissionContent.title}
          content={MissionContent.text}
          button={IntroContent.button}
          icon="/img/svg/luzdevidaseñora.png"
          id="mission"
        />
        <ContentBlockOnlyText
          direction="left"
          title={ObjetivoContent.title}
          content={ObjetivoContent.text}
        />
        <SliderComponent ContentSlider={ContentSlider.image} />

        <ContentBlock
          direction="left"
          title={InstalacionesContent.title}
          content={InstalacionesContent.content}
          sliderContent={InstalacionesContent.image}
          fullWidthSlider
          id="about"
        ></ContentBlock>
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
