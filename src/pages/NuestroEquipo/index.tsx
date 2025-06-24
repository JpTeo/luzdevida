import WhatsAppButton from "../../common/Button/Flotante/WhatsApp";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import ContentBlockCopy from "../../components/ContentBlockPersonalizado";
import data from "../../content/nuestroEquipo.json";
import { NuestroEquipoData } from "../../types/NuestroEquipo";
import CardProfessional from "../../components/cardsProfesional/Card";

const NuestroEquipo = () => {
  const nuestroEquipo = data as NuestroEquipoData;
  return (
    <>
      <WhatsAppButton />
      <ScrollToTop />
      <Container>
        <br></br>
        <br></br>
        {nuestroEquipo.professionals.map((item) => (
          <ContentBlockCopy
            key={item.id}
            direction={item.direction}
            title={item.title}
            content={item.content || ""}
            name={item.name}
            Icon={
              <CardProfessional
                id={item.id}
                title={item.title}
                name={item.name}
                license={item.license}
                icon={item.icon}
                direction={item.direction}
              />
            }
            id="product"
            imageSize={{
              height: "auto",
              width: "70%",
            }}
          />
        ))}

        <br></br>
      </Container>
    </>
  );
};

export default NuestroEquipo;
