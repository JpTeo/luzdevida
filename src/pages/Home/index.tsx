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
import ProfessionalCards from "../../components/professional-card";

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
        id="intro"
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
        <ContentBlock
          direction="right"
          title={MissionContent.title}
          content={MissionContent.text}
          button={IntroContent.button}
          icon="/img/sliderObjetivo/1.jpeg"
          imageSize={{
            height: "auto",
            width: "60%",
          }}
          id="mission"
        />
        <ContentBlockOnlyText
          direction="left"
          title={ObjetivoContent.title}
          content={ObjetivoContent.text}
        />
        <SliderComponent ContentSlider={ContentSlider.image} />
        
         <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 bg-[#f8f4f1]">
      <div className="w-full max-w-7xl">
        <ProfessionalCards />
      </div>
    </div>

        <ContentBlock
          direction="left"
          imageSize={{
            height: "100%",
            width: "100%",
          }}
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
