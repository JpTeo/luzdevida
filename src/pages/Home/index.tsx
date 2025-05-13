import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
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
      <FullWidthContentBlock
        icon="luzdevidahome.png"
        title={IntroContent.title}
        content={IntroContent.text}
        id="intro"
        button={IntroContent.button}
        direction={"right"}
      />
      <Container>
        <br></br>
        <br></br>
        {/* <ContentBlock
          direction="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon="luzdevidahome.png"
          id="intro"
        /> */}
        <ContentBlock
          direction="left"
          title={ProductContent.title}
          content={ProductContent.text}
          icon="logoluzdevida.png"
          id="product"
        />
        <ContentBlock
          direction="right"
          title={MissionContent.title}
          content={MissionContent.text}
          button={IntroContent.button}
          icon="luzdevidaseñora.png"
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
          title={AboutContent.title}
          content={AboutContent.text}
          icon="luzdevidacomida.png"
          id="about"
        ></ContentBlock>
        <ContentBlockOnlyText
          direction="right"
          title={InstalacionesContent.title}
          content={InstalacionesContent.content}
        />
        <SliderComponent ContentSlider={InstalacionesContent.image} />
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
